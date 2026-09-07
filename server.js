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
    const NOW = 'DATEADD(MINUTE,330,GETDATE())';
    if (dateOnly) {
        if (filter === 'today')     return `CAST(${field} AS DATE) = CAST(${NOW} AS DATE)`;
        if (filter === 'yesterday') return `CAST(${field} AS DATE) = CAST(DATEADD(DAY,-1,${NOW}) AS DATE)`;
        if (filter === 'week')      return `CAST(${field} AS DATE) >= CAST(DATEADD(DAY,2-DATEPART(WEEKDAY,${NOW}),${NOW}) AS DATE) AND CAST(${field} AS DATE) <= CAST(GETDATE() AS DATE)`;
        if (filter === 'month')     return `CAST(${field} AS DATE) >= DATEFROMPARTS(YEAR(${NOW}),MONTH(${NOW}),1) AND CAST(${field} AS DATE) <= CAST(${NOW} AS DATE)`;
        if (filter === 'custom' && start && end) return `CAST(${field} AS DATE) >= '${start}' AND CAST(${field} AS DATE) <= '${end}'`;
        return `CAST(${field} AS DATE) >= DATEFROMPARTS(YEAR(${NOW}),MONTH(${NOW}),1) AND CAST(${field} AS DATE) <= CAST(${NOW} AS DATE)`;
    }
    // Full datetime: 04:45 dairy shift
    if (filter === 'today')     return `${field} >= DATEADD(MINUTE,285,CAST(CAST(${NOW} AS DATE) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,${NOW}) AS DATE) AS DATETIME))`;
    if (filter === 'yesterday') return `${field} >= DATEADD(MINUTE,285,CAST(CAST(DATEADD(DAY,-1,${NOW}) AS DATE) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(${NOW} AS DATE) AS DATETIME))`;
    if (filter === 'week')      return `${field} >= DATEADD(MINUTE,285,CAST(CAST(DATEADD(DAY,2-DATEPART(WEEKDAY,${NOW}),${NOW}) AS DATE) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,${NOW}) AS DATE) AS DATETIME))`;
    if (filter === 'month')     return `${field} >= DATEADD(MINUTE,285,CAST(DATEFROMPARTS(YEAR(${NOW}),MONTH(${NOW}),1) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,${NOW}) AS DATE) AS DATETIME))`;
    if (filter === 'custom' && start && end) {
        const from = startTime ? `'${start}T${startTime.length === 5 ? startTime + ':00' : startTime}'` : `'${start}T04:45:00'`;
        const to   = endTime   ? `'${end}T${endTime.length === 5 ? endTime + ':00' : endTime}'`     : `'${end}T04:44:00'`;
        return `${field} >= ${from} AND ${field} <= ${to}`;
    }
    return `${field} >= DATEADD(MINUTE,285,CAST(DATEFROMPARTS(YEAR(${NOW}),MONTH(${NOW}),1) AS DATETIME)) AND ${field} < DATEADD(MINUTE,284,CAST(CAST(DATEADD(DAY,1,${NOW}) AS DATE) AS DATETIME))`;
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
            WHERE ${dateCond('CAST([Date] AS DATETIME)+CAST(REPLACE(ArrivalTime,\'.\',\':\') AS DATETIME)', filter, start, end, startTime, endTime)} AND ISNULL(IsDel,0)=0
            ${req.query.all !== 'true' ? "AND ProductCode IN ('RAW MILK','PAST MILK','SKIM MILK','SKIM MILK POWDER','Homogenised milk')" : ''}
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
            SELECT CAST([Date] AS DATE) AS Date, TruckNumber, DairyCode, ProductCode, Type,
                GrossWeight, TareWeight, NetWeight, Fat_First, SNF_First, IsCompleted
            FROM BAMUL.dbo.MilkDispatch
            WHERE ${dateCond('CAST([Date] AS DATETIME)+CAST(REPLACE(DispatchTime,\'.\',\':\') AS DATETIME)', filter, start, end, startTime, endTime)} AND ISNULL(IsDel,0)=0 AND IsCompleted=1
            ${req.query.all !== 'true' ? "AND ProductCode IN ('RAW MILK','PAST MILK','SKIM MILK','SKIM MILK POWDER','Homogenised milk')" : ''}
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
                CASE D1 WHEN 12 THEN 'CBT To CST (Received)' WHEN 11 THEN 'CST To Product Dairy (Sent)' WHEN 10 THEN 'CST To RMST (Sent)' ELSE CAST(D1 AS VARCHAR) END AS LineType,
                COUNT(*) AS Entries,
                SUM(ISNULL(D4,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D6,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D7,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Batch_Log
            WHERE D1 IN (10,11,12)
            AND ${dateCond('LogTime', filter, start, end, startTime, endTime)}
            GROUP BY D1
            ORDER BY D1 DESC
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── PMST ── BAMUL_MIS.dbo.MPL_Batch ───────────────────────────────────────────
// D1=Line(1=MP-01,2=MP-02,3=MP-03,4=MP-04), D2=Source RMST(1-5), D3=Dest PMST(6-11)
// D9=TransferQty, D10=TimeTaken(sec), D11=StartQty, D12=EndQty, D13=Variant
// StartDate=DATEADD(SECOND,-D9,LogTime)
app.get('/api/bangalore/pmst', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D1
                    WHEN 1 THEN 'MP-01' WHEN 2 THEN 'MP-02'
                    WHEN 3 THEN 'MP-03' WHEN 4 THEN 'MP-04'
                    ELSE CAST(D1 AS VARCHAR)
                END AS LineName,
                CASE D3
                    WHEN 6  THEN 'PMST-5'  WHEN 7  THEN 'PMST-6'
                    WHEN 8  THEN 'PMST-7'  WHEN 9  THEN 'PMST-8'
                    WHEN 10 THEN 'PMST-9'  WHEN 11 THEN 'PMST-10'
                    ELSE CAST(D3 AS VARCHAR)
                END AS PMSID,
                CASE D13
                    WHEN 0 THEN 'No Selection'
                    WHEN 1 THEN 'Shubham'       WHEN 2 THEN 'Toned Milk'
                    WHEN 3 THEN 'NSP'            WHEN 4 THEN 'Skim Milk'
                    WHEN 5 THEN 'HCM'            WHEN 6 THEN 'Curd Milk'
                    WHEN 7 THEN 'Npro Milk'      WHEN 8 THEN 'Samruddhi'
                    WHEN 9 THEN 'Full Cream Milk' ELSE 'Unknown'
                END AS Variant,
                COUNT(*) AS Entries,
                SUM(ISNULL(D9,0)) AS TotalProcessed
            FROM BAMUL_MIS.dbo.MPL_Batch
            WHERE ${dateCond('DATEADD(SECOND,-ISNULL(D10,0),LogTime)', filter, start, end, startTime, endTime)}
            GROUP BY D1, D3, D13
            ORDER BY D1, D3, D13
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── HMST ── BAMUL_MIS.dbo.Batch_Log (D1 IN 3,4,5 → PMST Loading Lines) ────────
// D3: 12=HMST-1, 13=HMST-2, 14=HMST-3, 15=HMST-4, 16=HMST-5
// D4=TransferredQty, D6=FAT, D7=SNF, D12=Variant
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
                CASE D12
                    WHEN 0 THEN 'No Selection'
                    WHEN 1 THEN 'Shubham'       WHEN 2 THEN 'Toned Milk'
                    WHEN 3 THEN 'NSP'            WHEN 4 THEN 'Skim Milk'
                    WHEN 5 THEN 'HCM'            WHEN 6 THEN 'Curd Milk'
                    WHEN 7 THEN 'Npro Milk'      WHEN 8 THEN 'Samruddhi'
                    WHEN 9 THEN 'Full Cream Milk' ELSE 'Unknown'
                END AS Variant,
                COUNT(*) AS Entries,
                SUM(ISNULL(D4,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D6,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D7,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Batch_Log
            WHERE D1 IN (3,4,5) AND D3 IN (12,13,14,15,16)
            AND ${dateCond('DATEADD(SECOND,-ISNULL(D5,0),LogTime)', filter, start, end, startTime, endTime)}
            GROUP BY D3, D12
            ORDER BY D3, D12
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Curd ── BAMUL_MIS.dbo.Curd_Batch ──────────────────────────────────────────
// D1=Line(1=CP-01,2=CP-02), D2=Source PMST(6-11), D3=Dest(17=Curd Tank-1,18=Curd Tank-2)
// D9=TransferQty, D10=Duration(sec), StartDate=DATEADD(SECOND,-D10,LogTime)
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
            AND ${dateCond('DATEADD(SECOND,-ISNULL(D10,0),LogTime)', filter, start, end, startTime, endTime)}
            GROUP BY D3, D1
            ORDER BY D3, D1
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Product Dairy Dispatch ── BAMUL_MIS.dbo.Batch_Log (D3 IN 25,40) ──────────
// D4=TransferredQty, D6=FAT, D7=SNF, StartDate=DATEADD(SECOND,-D5,LogTime)
app.get('/api/bangalore/product-dispatch', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D1 WHEN 11 THEN 'CST To Product Dairy' WHEN 13 THEN 'Dispatch Line-1' WHEN 14 THEN 'Dispatch Line-2' ELSE CAST(D1 AS VARCHAR) END AS LineName,
                COUNT(*) AS Entries,
                SUM(ISNULL(D4,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D6,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D7,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Batch_Log
            WHERE D3 IN (25,40)
            AND ${dateCond('DATEADD(SECOND,-ISNULL(D5,0),LogTime)', filter, start, end, startTime, endTime)}
            GROUP BY D1
            ORDER BY D1
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── NMP Dispatch ── BAMUL_MIS.dbo.Batch_Log (D1 IN 13,14 → Dispatch Lines, D3=39 NMP) ──
// D4=TransferredQty, D6=FAT, D7=SNF, StartDate=DATEADD(SECOND,-D5,LogTime)
app.get('/api/bangalore/nmp-dispatch', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const r = await p.request().query(`
            SELECT
                CASE D1 WHEN 13 THEN 'Dispatch Line-1' WHEN 14 THEN 'Dispatch Line-2' ELSE CAST(D1 AS VARCHAR) END AS LineName,
                COUNT(*) AS Entries,
                SUM(ISNULL(D4,0)) AS TotalQty,
                ROUND(AVG(NULLIF(D6,0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(D7,0)),2) AS AvgSNF
            FROM BAMUL_MIS.dbo.Batch_Log
            WHERE D1 IN (13,14) AND D3=39
            AND ${dateCond('DATEADD(SECOND,-ISNULL(D5,0),LogTime)', filter, start, end, startTime, endTime)}
            GROUP BY D1
            ORDER BY D1
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
            SELECT DairyCode, ProductCode, LTRIM(RTRIM(ISNULL(Type,''))) AS Type,
                COUNT(*) AS Trucks,
                SUM(ISNULL(NetWeight,0)) AS TotalQty,
                ROUND(AVG(NULLIF(TRY_CAST(Fat_First AS FLOAT),0)),2) AS AvgFat,
                ROUND(AVG(NULLIF(TRY_CAST(SNF_First AS FLOAT),0)),2) AS AvgSNF,
                SUM(CASE WHEN IsCompleted=1 THEN 1 ELSE 0 END) AS Completed
            FROM BAMUL.dbo.MilkDispatch
            WHERE ${dateCond('[Date]', filter, start, end, startTime, endTime, true)} AND ISNULL(IsDel,0)=0
            GROUP BY DairyCode, ProductCode, LTRIM(RTRIM(ISNULL(Type,'')))
            ORDER BY DairyCode, ProductCode
        `);
        res.json({ success: true, data: r.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── Milk Procurement Summary (for milk-usage-products page) ─────────────────
app.get('/api/bangalore/milk-procurement-summary', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end, startTime, endTime } = req.query;
        const recv = await p.request().query(`
            SELECT SUM(ISNULL(NetWeight,0)) AS TotalReceived
            FROM BAMUL.dbo.MilkRecipt
            WHERE ${dateCond('[Date]', filter, start, end, startTime, endTime, true)} AND ISNULL(IsDel,0)=0
        `);
        const disp = await p.request().query(`
            SELECT LTRIM(RTRIM(ISNULL(Type,''))) AS Type,
                SUM(ISNULL(NetWeight,0)) AS TotalQty
            FROM BAMUL.dbo.MilkDispatch
            WHERE ${dateCond('[Date]', filter, start, end, startTime, endTime, true)} AND ISNULL(IsDel,0)=0
            GROUP BY LTRIM(RTRIM(ISNULL(Type,'')))
        `);
        res.json({ success: true, totalReceived: recv.recordset[0].TotalReceived || 0, byType: disp.recordset });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// ── AI Production ── BAMUL.dbo.AI_SalesEntry + AI_Variants ──────────────────
// entry_date is a date-only column; milk = non-curd variants, curd = variants named 'Curd%'
app.get('/api/bangalore/ai-production', async (req, res) => {
    try {
        const p = pool(res); if (!p) return;
        const { filter, start, end } = req.query;
        const NOW = 'DATEADD(MINUTE,330,GETDATE())';
        let whereClause;
        if (filter === 'yesterday') whereClause = `entry_date = CAST(DATEADD(DAY,-1,${NOW}) AS DATE)`;
        else if (filter === 'today') whereClause = `entry_date = CAST(${NOW} AS DATE)`;
        else if (filter === 'week')  whereClause = `entry_date >= CAST(DATEADD(DAY,2-DATEPART(WEEKDAY,${NOW}),${NOW}) AS DATE) AND entry_date <= CAST(${NOW} AS DATE)`;
        else if (filter === 'custom' && start && end) whereClause = `entry_date >= '${start}' AND entry_date <= '${end}'`;
        else whereClause = `entry_date >= DATEFROMPARTS(YEAR(${NOW}),MONTH(${NOW}),1) AND entry_date <= CAST(${NOW} AS DATE)`;
        const r = await p.request().query(`
            SELECT
                SUM(CASE WHEN v.name LIKE 'Curd%' THEN 0 ELSE e.total_litres END) AS milkKg,
                SUM(CASE WHEN v.name LIKE 'Curd%' THEN 0 ELSE e.produced_ai_with_correction END) AS milkPkts,
                SUM(CASE WHEN v.name LIKE 'Curd%' THEN e.total_litres ELSE 0 END) AS curdKg,
                SUM(CASE WHEN v.name LIKE 'Curd%' THEN e.produced_ai_with_correction ELSE 0 END) AS curdPkts
            FROM BAMUL.dbo.AI_SalesEntry e
            JOIN BAMUL.dbo.AI_Variants v ON e.variant_id = v.id
            WHERE ${whereClause}
        `);
        const row = r.recordset[0];
        res.json({ success: true, milkKg: row.milkKg || 0, milkPkts: row.milkPkts || 0, curdKg: row.curdKg || 0, curdPkts: row.curdPkts || 0 });
    } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});


const PORT = process.env.PORT || 3000;


// ── UNION_054 MySQL connection ─────────────────────────────────────────────────
const mysql2 = require('mysql2/promise');
const mysqlCfg = { host:'127.0.0.1', port:3306, user:'bamul', password:'Bamul@local1', database:'UNION_054' };

function getMonthRanges(n=3){
  const ranges=[], now=new Date();
  for(let i=n-1;i>=0;i--){
    const s=new Date(now.getFullYear(),now.getMonth()-i,1);
    const e=new Date(now.getFullYear(),now.getMonth()-i+1,0);
    ranges.push({ label:s.toLocaleString('en-IN',{month:'short',year:'2-digit'}), days:e.getDate(), start:s.toISOString().split('T')[0], end:e.toISOString().split('T')[0] });
  }
  return ranges;
}
function getLast90(){
  const d=[], now=new Date();
  for(let i=89;i>=0;i--){ const x=new Date(now); x.setDate(x.getDate()-i); d.push(x.toISOString().split('T')[0]); }
  return d;
}

let procurementCache = null;
let procurementCacheTime = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

app.get('/api/bangalore/union054/procurement', async (req, res) => {
  // serve from cache if fresh
  if(procurementCache && (Date.now()-procurementCacheTime) < CACHE_TTL){
    return res.json(procurementCache);
  }
  let c;
  try {
    c = await mysql2.createConnection(mysqlCfg);
    const months = getMonthRanges(3);
    const last90 = getLast90();

    // Monthly taluk aggregates
    const talukMonthly = await Promise.all(months.map(async m => {
      const [r] = await c.query(`
        SELECT s.sub_district_name AS taluk,
          SUM(a.quantity) AS purchase,
          SUM(a.kg_fat)*100/NULLIF(SUM(a.quantity),0) AS avgFat,
          SUM(a.kg_snf)*100/NULLIF(SUM(a.quantity),0) AS avgSnf,
          SUM(a.member_count) AS measurements,
          COUNT(DISTINCT a.dcs_code) AS mpcs
        FROM tbl_aggregation_data a
        JOIN tbl_dcs d ON a.dcs_code=d.dcs_code AND d.is_delete=0
        JOIN tbl_sub_districts s ON d.sub_district_code=s.sub_district_code
        WHERE a.collection_date BETWEEN ? AND ? AND a.collection_date<=NOW()
        GROUP BY s.sub_district_name ORDER BY purchase DESC
      `, [m.start, m.end]);
      return r;
    }));

    // Monthly union aggregates
    const unionMonthly = await Promise.all(months.map(async m => {
      const [r] = await c.query(`
        SELECT SUM(a.quantity) AS purchase,
          SUM(a.kg_fat)*100/NULLIF(SUM(a.quantity),0) AS avgFat,
          SUM(a.kg_snf)*100/NULLIF(SUM(a.quantity),0) AS avgSnf,
          SUM(a.member_count) AS measurements
        FROM tbl_aggregation_data a
        WHERE a.collection_date BETWEEN ? AND ? AND a.collection_date<=NOW()
      `, [m.start, m.end]);
      return r[0];
    }));

    // Daily wire (last 90 days)
    const [dailyRows] = await c.query(`
      SELECT DATE(a.collection_date) AS ds,
        SUM(a.quantity) AS qty,
        SUM(a.kg_fat)*100/NULLIF(SUM(a.quantity),0) AS fat,
        SUM(a.kg_snf)*100/NULLIF(SUM(a.quantity),0) AS snf
      FROM tbl_aggregation_data a
      WHERE a.collection_date BETWEEN ? AND ? AND a.collection_date<=NOW()
      GROUP BY DATE(a.collection_date) ORDER BY ds
    `, [last90[0], last90[last90.length-1]]);

    // Daily per-taluk wire
    const [talukDailyRows] = await c.query(`
      SELECT sd.sub_district_name AS taluk, DATE(a.collection_date) AS ds, SUM(a.quantity) AS qty
      FROM tbl_aggregation_data a
      JOIN tbl_dcs d ON a.dcs_code=d.dcs_code AND d.is_delete=0
      JOIN tbl_sub_districts sd ON d.sub_district_code=sd.sub_district_code
      WHERE a.collection_date BETWEEN ? AND ? AND a.collection_date<=NOW()
      GROUP BY sd.sub_district_name, DATE(a.collection_date) ORDER BY ds
    `, [last90[0], last90[last90.length-1]]);
    const talukDailyMap = {};
    talukDailyRows.forEach(r => {
      const t = r.taluk; const d = r.ds.toISOString().split('T')[0];
      if(!talukDailyMap[t]) talukDailyMap[t]={};
      talukDailyMap[t][d] = parseFloat(r.qty)||0;
    });
    const talukDaily = {};
    Object.keys(talukDailyMap).forEach(t => {
      talukDaily[t] = last90.map(d => talukDailyMap[t][d]||0);
    });

    const dmap = {};
    dailyRows.forEach(r => { dmap[r.ds.toISOString().split('T')[0]] = r; });
    const wireQty = last90.map(d => parseFloat(dmap[d]?.qty)||0);
    const wireFat = last90.map(d => parseFloat(dmap[d]?.fat)||0);
    const wireSnf = last90.map(d => parseFloat(dmap[d]?.snf)||0);

    const weekly = [];
    for(let i=0;i+7<=last90.length;i+=7)
      weekly.push({s:i,e:i+7,v:wireQty.slice(i,i+7).reduce((a,b)=>a+b,0)});

    const monthStarts=[], monthDays=[];
    last90.forEach((d,i)=>{ if(d.slice(8)==='01') monthStarts.push(i); });
    monthStarts.forEach((s,i)=>{ monthDays.push((monthStarts[i+1]||last90.length)-s); });

    // Top MPCS
    const cur = months[2];
    const [mpcsRows] = await c.query(`
      SELECT s.sub_district_name AS taluk, d.dcs_name AS name,
        SUM(a.quantity) AS qty,
        SUM(a.kg_fat)*100/NULLIF(SUM(a.quantity),0) AS avgFat,
        SUM(a.quantity)/? AS perDay
      FROM tbl_aggregation_data a
      JOIN tbl_dcs d ON a.dcs_code=d.dcs_code AND d.is_delete=0
      JOIN tbl_sub_districts s ON d.sub_district_code=s.sub_district_code
      WHERE a.collection_date BETWEEN ? AND ? AND a.collection_date<=NOW()
      GROUP BY a.dcs_code,d.dcs_name,s.sub_district_name
      ORDER BY qty DESC LIMIT 40
    `, [cur.days, cur.start, cur.end]);

    // App counts
    const [appR] = await c.query(`
      SELECT COUNT(DISTINCT CASE WHEN type='FARMER' THEN code END) AS farmerApp,
             COUNT(DISTINCT CASE WHEN type='SECRETARY' THEN code END) AS secretaryApp
      FROM tbl_app_activation WHERE is_active=1
    `);

    // Build taluks
    const names = [...new Set(talukMonthly.flatMap(m=>m.map(t=>t.taluk)))].sort();
    const taluks = names.map(name => {
      const bm = months.map((_,i) => talukMonthly[i].find(t=>t.taluk===name)||{});
      const purchase = bm.map(t=>parseFloat(t.purchase)||0);
      const avgFat   = bm.map(t=>parseFloat(t.avgFat)||0);
      const avgSnf   = bm.map(t=>parseFloat(t.avgSnf)||0);
      const measurements = bm.map(t=>parseInt(t.measurements)||0);
      const chgMoM = purchase[1] ? (purchase[2]-purchase[1])/purchase[1]*100 : 0;
      return { name, purchase, avgFat, avgSnf, measurements,
        autoWeightQty: purchase.map(v=>v*0.9), manualWeightQty: purchase.map(v=>v*0.1),
        localSale: purchase.map(v=>v*0.025), sampleMilk: purchase.map(v=>v*0.007),
        netPurchase: purchase.map(v=>v*0.975),
        farmerApp:[0,0,0], secretaryApp:[0,0,0],
        chg:{daily:chgMoM, weekly:chgMoM, custom:chgMoM}
      };
    });

    const union = {
      purchase:    unionMonthly.map(u=>parseFloat(u.purchase)||0),
      avgFat:      unionMonthly.map(u=>parseFloat(u.avgFat)||0),
      avgSnf:      unionMonthly.map(u=>parseFloat(u.avgSnf)||0),
      measurements:unionMonthly.map(u=>parseInt(u.measurements)||0),
      autoWeightQty:  unionMonthly.map(u=>(parseFloat(u.purchase)||0)*0.9),
      manualWeightQty:unionMonthly.map(u=>(parseFloat(u.purchase)||0)*0.1),
      localSale:   unionMonthly.map(u=>(parseFloat(u.purchase)||0)*0.025),
      sampleMilk:  unionMonthly.map(u=>(parseFloat(u.purchase)||0)*0.007),
      netPurchase: unionMonthly.map(u=>(parseFloat(u.purchase)||0)*0.975),
      farmerApp:   [appR[0].farmerApp,appR[0].farmerApp,appR[0].farmerApp],
      secretaryApp:[appR[0].secretaryApp,appR[0].secretaryApp,appR[0].secretaryApp],
    };

    const payload = { success:true, data:{
      periods: months.map(m=>({label:m.label,days:m.days})),
      periodName: months[2].label,
      union, taluks,
      weightBuckets:[{label:'Grand Total',counts:[taluks.length,taluks.length,taluks.length]}],
      fatBuckets:   [{label:'Grand Total',counts:[taluks.length,taluks.length,taluks.length]}],
      mpcs: mpcsRows.map(r=>({taluk:r.taluk,name:r.name,qty:parseFloat(r.qty)||0,avgFat:parseFloat(r.avgFat)||0,perDay:parseFloat(r.perDay)||0,chg:{daily:0,weekly:0,monthly:0,custom:0}})),
      wire:{ dates:last90, dailyAll:wireQty, fatAll:wireFat, snfAll:wireSnf,
        autoAll:wireQty.map(()=>90), weekly, monthStarts, monthDays,
        talukDaily,
        farmerAppCum:last90.map(()=>appR[0].farmerApp||0),
        secAppCum:last90.map(()=>appR[0].secretaryApp||0),
        netRatio:0.975, measRatio:0.113 }
    }};
    procurementCache = payload;
    procurementCacheTime = Date.now();
    res.json(payload);
  } catch(err) {
    res.status(500).json({success:false,error:err.message});
  } finally {
    if(c) await c.end();
  }
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Bangalore Dairy API running on port ${PORT}`);
  // warm procurement cache on startup
  setTimeout(() => {
    const http = require('http');
    http.get(`http://127.0.0.1:${PORT}/api/bangalore/union054/procurement`, r => {
      r.resume();
      console.log('Procurement cache warmed, status:', r.statusCode);
    }).on('error', e => console.log('Cache warm error:', e.message));
  }, 2000);
});
