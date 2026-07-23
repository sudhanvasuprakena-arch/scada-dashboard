const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const path = require('path');
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── SQL Server config ──────────────────────────────────────────────────────────
const sqlConfig = {
    user: 'sa',
    password: 'Bamul@1234',
    server: 'localhost',
    options: { encrypt: false, trustServerCertificate: true, connectTimeout: 30000, requestTimeout: 30000 }
};

let sqlPool = null;
sql.connect(sqlConfig).then(pool => {
    sqlPool = pool;
    console.log('Connected to SQL Server');
}).catch(err => {
    console.error('SQL Server connection failed:', err.message);
});

// ── Date condition helper ──────────────────────────────────────────────────────
// dateOnly=true  → plain date compare (MilkRecipt, MilkDispatch — date-only fields)
// dateOnly=false → 04:45 dairy shift (BAMUL_MIS LogTime — full datetime fields)
function dateCond(field, filter, start, end, startTime, endTime, dateOnly = false) {
    if (dateOnly) {
        if (filter === 'today')     return `CAST(${field} AS DATE) = CAST(GETDATE() AS DATE)`;
        if (filter === 'yesterday') return `CAST(${field} AS DATE) = CAST(DATEADD(DAY,-1,GETDATE()) AS DATE)`;
        if (filter === 'week')      return `CAST(${field} AS DATE) >= CAST(DATEADD(DAY,1-DATEPART(WEEKDAY,GETDATE()),GETDATE()) AS DATE) AND CAST(${field} AS DATE) <= CAST(GETDATE() AS DATE)`;
        if (filter === 'month')     return `CAST(${field} AS DATE) >= DATEFROMPARTS(YEAR(GETDATE()),MONTH(GETDATE()),1) AND CAST(${field} AS DATE) <= CAST(GETDATE() AS DATE)`;
        if (filter === 'custom' && start && end) return `CAST(${field} AS DATE) >= '${start}' AND CAST(${field} AS DATE) <= '${end}'`;
        return `CAST(${field} AS DATE) >= DATEFROMPARTS(YEAR(GETDATE()),MONTH(GETDATE()),1) AND CAST(${field} AS DATE) <= CAST(GETDATE() AS DATE)`;
    }
    // Full datetime: 04:45 dairy shift
    if (filter === 'today')     return `${field} >= DATEADD(MINUTE,285,CAST(CAST(GETDATE() AS DATE) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,GETDATE()) AS DATE) AS DATETIME))`;
    if (filter === 'yesterday') return `${field} >= DATEADD(MINUTE,285,CAST(CAST(DATEADD(DAY,-1,GETDATE()) AS DATE) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(GETDATE() AS DATE) AS DATETIME))`;
    if (filter === 'week')      return `${field} >= DATEADD(MINUTE,285,CAST(CAST(DATEADD(DAY,1-DATEPART(WEEKDAY,GETDATE()),GETDATE()) AS DATE) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,GETDATE()) AS DATE) AS DATETIME))`;
    if (filter === 'month')     return `${field} >= DATEADD(MINUTE,285,CAST(DATEFROMPARTS(YEAR(GETDATE()),MONTH(GETDATE()),1) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,GETDATE()) AS DATE) AS DATETIME))`;
    if (filter === 'custom' && start && end) {
        const from = startTime ? `'${start}T${startTime}'` : `'${start}T04:45:00'`;
        const to   = endTime   ? `'${end}T${endTime}'`     : `'${end}T04:44:00'`;
        return `${field} >= ${from} AND ${field} <= ${to}`;
    }
    return `${field} >= DATEADD(MINUTE,285,CAST(DATEFROMPARTS(YEAR(GETDATE()),MONTH(GETDATE()),1) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,GETDATE()) AS DATE) AS DATETIME))`;
}

function pool(res) {
    if (!sqlPool) { res.status(503).json({ success: false, error: 'SQL Server not connected' }); return null; }
    return sqlPool;
}

// ── Weigh Bridge ───────────────────────────────────────────────────────────────
app.get('/api/bangalore/truck-entry', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT CAST([Date] AS DATE) AS Date, TruckNumber, DairyCode, ProductCode,
                DCNumber_Sender, GrossWeight, TareWeight, NetWeight,
                Fat_First, SNF_First, IsCompleted
            FROM BAMUL.dbo.MilkRecipt
            WHERE ${dateCond('[Date]', filter, start, end, startTime, endTime, true)} AND ISNULL(IsDel,0)=0
            ORDER BY [Date] DESC, ArrivalTime DESC
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Milk Dispatch ──────────────────────────────────────────────────────────────
app.get('/api/bangalore/milk-dispatch-truck', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT CAST([Date] AS DATE) AS Date, TruckNumber, DairyCode, ProductCode,
                GrossWeight, TareWeight, NetWeight, Fat_First, SNF_First, IsCompleted
            FROM BAMUL.dbo.MilkDispatch
            WHERE ${dateCond('[Date]', filter, start, end, startTime, endTime, true)} AND ISNULL(IsDel,0)=0
            ORDER BY [Date] DESC
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── RMST ── BAMUL_MIS.dbo.Rec_Batch ───────────────────────────────────────────
// D3: 1=RMST-1, 2=RMST-2, 3=RMST-3, 4=RMST-4, 5=RMST-4A
// D6=TransferredQty, D9=FAT, D10=SNF
app.get('/api/bangalore/rmst', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D3
                    WHEN 1 THEN 'RMST-1' WHEN 2 THEN 'RMST-2'
                    WHEN 3 THEN 'RMST-3' WHEN 4 THEN 'RMST-4'
                    WHEN 5 THEN 'RMST-4A' ELSE CAST(D3 AS VARCHAR)
                END AS RMSID,
                COUNT(*) AS Entries,
                SUM(ISNULL(D6,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D9,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D10,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Rec_Batch
            WHERE ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            GROUP BY D3
            ORDER BY D3
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── RMST Details (all batches) ─────────────────────────────────────────────────
app.get('/api/bangalore/rmst-detail', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                LogTime,
                DATEADD(SECOND,-ISNULL(D7,0),LogTime) AS StartTime,
                D1 AS BayNo,
                CASE D3
                    WHEN 1 THEN 'RMST-1' WHEN 2 THEN 'RMST-2'
                    WHEN 3 THEN 'RMST-3' WHEN 4 THEN 'RMST-4'
                    WHEN 5 THEN 'RMST-4A' ELSE CAST(D3 AS VARCHAR)
                END AS RMSID,
                ISNULL(D6,0) AS TransferredQty,
                D9 AS Fat, D10 AS SNF
            FROM BAMUL_MIS.dbo.Rec_Batch
            WHERE ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            ORDER BY LogTime DESC
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Cream ── BAMUL_MIS.dbo.Batch_Log (D1=12 received, D1=11 sent) ─────────────
// D4=TransferredQty, D6=FAT, D7=SNF
app.get('/api/bangalore/cream', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D1 WHEN 12 THEN 'CBT To CST (Received)' WHEN 11 THEN 'CST To Product Dairy (Sent)' ELSE CAST(D1 AS VARCHAR) END AS LineType,
                COUNT(*) AS Entries,
                SUM(ISNULL(D4,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D6,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D7,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Batch_Log
            WHERE D1 IN (11,12)
            AND ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            GROUP BY D1
            ORDER BY D1 DESC
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── PMST ── BAMUL_MIS.dbo.MPL_Batch ───────────────────────────────────────────
// D3: 6=PMST-5, 7=PMST-6, 8=PMST-7, 9=PMST-8, 10=PMST-9, 11=PMST-10
// D9=TransferQty
// D13: 1=Shubham,2=Toned Milk,3=NSP,4=Skim Milk,5=HCM,6=Curd Milk,7=Npro Milk,8=Samruddhi,9=Full Cream Milk
app.get('/api/bangalore/pmst', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D3
                    WHEN 6  THEN 'PMST-5'  WHEN 7  THEN 'PMST-6'
                    WHEN 8  THEN 'PMST-7'  WHEN 9  THEN 'PMST-8'
                    WHEN 10 THEN 'PMST-9'  WHEN 11 THEN 'PMST-10'
                    ELSE CAST(D3 AS VARCHAR)
                END AS PMSID,
                CASE D13
                    WHEN 1 THEN 'Shubham'       WHEN 2 THEN 'Toned Milk'
                    WHEN 3 THEN 'NSP'            WHEN 4 THEN 'Skim Milk'
                    WHEN 5 THEN 'HCM'            WHEN 6 THEN 'Curd Milk'
                    WHEN 7 THEN 'Npro Milk'      WHEN 8 THEN 'Samruddhi'
                    WHEN 9 THEN 'Full Cream Milk' ELSE 'Unknown'
                END AS Variant,
                COUNT(*) AS Entries,
                SUM(ISNULL(D9,0)) AS TotalProcessed
            FROM BAMUL_MIS.dbo.MPL_Batch
            WHERE ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            GROUP BY D3, D13
            ORDER BY D3, D13
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── HMST ── BAMUL_MIS.dbo.Batch_Log (D1 IN 3,4,5 → PMST Loading Lines) ────────
// D3: 12=HMST-1, 13=HMST-2, 14=HMST-3, 15=HMST-4, 16=HMST-5
// D4=TransferredQty, D6=FAT, D7=SNF
app.get('/api/bangalore/hmst', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D3
                    WHEN 12 THEN 'HMST-1' WHEN 13 THEN 'HMST-2'
                    WHEN 14 THEN 'HMST-3' WHEN 15 THEN 'HMST-4'
                    WHEN 16 THEN 'HMST-5' ELSE CAST(D3 AS VARCHAR)
                END AS HMSTID,
                COUNT(*) AS Entries,
                SUM(ISNULL(D4,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D6,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D7,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Batch_Log
            WHERE D1 IN (3,4,5) AND D3 IN (12,13,14,15,16)
            AND ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            GROUP BY D3
            ORDER BY D3
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Curd ── BAMUL_MIS.dbo.Curd_Batch ──────────────────────────────────────────
// D1: 1=CP-01, 2=CP-02 | D3: 17=Curd Tank-1, 18=Curd Tank-2
// D9=TransferQty
app.get('/api/bangalore/curd', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D3
                    WHEN 17 THEN 'Curd Tank-1'
                    WHEN 18 THEN 'Curd Tank-2'
                    ELSE CAST(D3 AS VARCHAR)
                END AS TankID,
                CASE D1 WHEN 1 THEN 'CP-01' WHEN 2 THEN 'CP-02' ELSE CAST(D1 AS VARCHAR) END AS LineName,
                COUNT(*) AS Entries,
                SUM(ISNULL(D9,0)) AS TotalQty
            FROM BAMUL_MIS.dbo.Curd_Batch
            WHERE D3 IN (17,18)
            AND ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            GROUP BY D3, D1
            ORDER BY D3, D1
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Milk Dispatch detail (for dispatch details page) ──────────────────────────
app.get('/api/bangalore/milk-dispatch', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT DairyCode, ProductCode,
                COUNT(*) AS Trucks,
                SUM(ISNULL(NetWeight,0)) AS TotalQty,
                ROUND(AVG(NULLIF(Fat_First,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(SNF_First,0)),2) AS AvgSNF,
                SUM(CASE WHEN IsCompleted=1 THEN 1 ELSE 0 END) AS Completed
            FROM BAMUL.dbo.MilkDispatch
            WHERE ${dateCond('[Date]', filter, start, end, startTime, endTime, true)} AND ISNULL(IsDel,0)=0
            GROUP BY DairyCode, ProductCode
            ORDER BY DairyCode, ProductCode
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Bangalore Dairy API running on port ${PORT}`));
