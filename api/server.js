const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const oracledb = require('oracledb');
const app = express();

oracledb.initOracleClient({
  libDir: "/home/bamul-bk/project/Bamul_Final/Bamul_Oracle/instantclient"
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// MySQL connection for UNION_054
const dbUnion = mysql.createPool({
    host: '103.70.139.163',
    user: 'bamulro',
    password: 'Bamulro@123',
    database: 'UNION_054',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 30000
});

// MariaDB connection for Bamul_sales_data
const dbSales = mysql.createPool({
    host: '192.168.0.115',
    port: 3306,
    user: 'frappe',
    password: 'frappe',
    database: 'Bamul_sales_data',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 30000
});

dbSales.getConnection((err, connection) => {
    if (err) {
        console.error('Bamul_sales_data connection failed:', err);
    } else {
        console.log('Connected to Bamul_sales_data database');
        connection.release();
    }
});

// Oracle connection pool
oracledb.createPool({
  user: "apps_readonly",
  password: "GsdjdRuta975",
  connectString: "115.124.111.4:1521/BMLPROD",
  poolMin: 2,
  poolMax: 10,
  poolIncrement: 1
}).then(() => {
    console.log('Connected to Oracle database');
}).catch(err => {
    console.error('Oracle connection failed:', err);
});

// Test MySQL connection
dbUnion.getConnection((err, connection) => {
    if (err) {
        console.error('UNION_054 connection failed:', err);
    } else {
        console.log('Connected to UNION_054 database');
        connection.release();
    }
});

// GET API - Fetch day-wise DCS data
app.get('/api/dcs', (req, res) => {
    const { filter, start, end } = req.query;
    
    let query;
    let params;
    
    if (filter === 'today') {
        query = `
            SELECT 
                DATE_FORMAT(collection_date, '%Y-%m-%d') AS date,
                SUM(quantity) AS total_milk,
                SUM(amount) AS total_amount,
                ROUND(AVG(fat), 2) AS avg_fat,
                ROUND(AVG(snf), 2) AS avg_snf,
                COUNT(member_code) AS total_entries
            FROM tbl_milk_collection
            WHERE collection_date >= CURDATE() AND collection_date < CURDATE() + INTERVAL 1 DAY
            GROUP BY DATE(collection_date)
        `;
        params = [];
    } else if (filter === 'yesterday') {
        query = `
            SELECT 
                DATE_FORMAT(collection_date, '%Y-%m-%d') AS date,
                SUM(quantity) AS total_milk,
                SUM(amount) AS total_amount,
                ROUND(AVG(fat), 2) AS avg_fat,
                ROUND(AVG(snf), 2) AS avg_snf,
                COUNT(member_code) AS total_entries
            FROM tbl_milk_collection
            WHERE collection_date >= CURDATE() - INTERVAL 1 DAY AND collection_date < CURDATE()
            GROUP BY DATE(collection_date)
        `;
        params = [];
    } else if (filter === 'custom' && start && end) {
        query = `
            SELECT 
                DATE_FORMAT(MIN(collection_date), '%Y-%m-%d') AS date,
                DATE_FORMAT(MAX(collection_date), '%Y-%m-%d') AS date_end,
                SUM(quantity) AS total_milk,
                SUM(amount) AS total_amount,
                ROUND(AVG(fat), 2) AS avg_fat,
                ROUND(AVG(snf), 2) AS avg_snf,
                COUNT(member_code) AS total_entries
            FROM tbl_milk_collection
            WHERE collection_date >= ? AND collection_date < DATE_ADD(?, INTERVAL 1 DAY)
        `;
        params = [start, end];
    } else if (filter === 'week') {
        query = `
            SELECT 
                DATE_FORMAT(MIN(collection_date), '%Y-%m-%d') AS date,
                DATE_FORMAT(MAX(collection_date), '%Y-%m-%d') AS date_end,
                SUM(quantity) AS total_milk,
                SUM(amount) AS total_amount,
                ROUND(AVG(fat), 2) AS avg_fat,
                ROUND(AVG(snf), 2) AS avg_snf,
                COUNT(member_code) AS total_entries
            FROM tbl_milk_collection
            WHERE collection_date >= DATE_SUB(CURDATE(), INTERVAL DAYOFWEEK(CURDATE()) - 1 DAY)
                AND collection_date < CURDATE() + INTERVAL 1 DAY
        `;
        params = [];
    } else if (filter === 'month') {
        query = `
            SELECT 
                DATE_FORMAT(MIN(collection_date), '%Y-%m-%d') AS date,
                DATE_FORMAT(MAX(collection_date), '%Y-%m-%d') AS date_end,
                SUM(quantity) AS total_milk,
                SUM(amount) AS total_amount,
                ROUND(AVG(fat), 2) AS avg_fat,
                ROUND(AVG(snf), 2) AS avg_snf,
                COUNT(member_code) AS total_entries
            FROM tbl_milk_collection
            WHERE collection_date >= DATE_FORMAT(CURDATE(), '%Y-%m-01')
                AND collection_date < CURDATE() + INTERVAL 1 DAY
        `;
        params = [];
    } else {
        query = `
            SELECT 
                DATE_FORMAT(collection_date, '%Y-%m-%d') AS date,
                SUM(quantity) AS total_milk,
                SUM(amount) AS total_amount,
                ROUND(AVG(fat), 2) AS avg_fat,
                ROUND(AVG(snf), 2) AS avg_snf,
                COUNT(member_code) AS total_entries
            FROM tbl_milk_collection
            WHERE collection_date >= CURDATE() - INTERVAL 10 DAY
            GROUP BY DATE(collection_date)
            ORDER BY date DESC
            LIMIT 10
        `;
        params = [];
    }
    
    const timeout = setTimeout(() => {
        if (!res.headersSent) {
            console.error('Query timeout after 20 seconds');
            res.status(504).json({ success: false, error: 'Database query timeout' });
        }
    }, 20000);
    
    dbUnion.query(query, params, (err, results) => {
        clearTimeout(timeout);
        
        if (res.headersSent) return;
        
        if (err) {
            console.error('Query error:', err);
            return res.status(500).json({ success: false, error: err.message });
        }
        if (results.length === 0) {
            return res.json({ success: true, data: [], message: 'No data available for the selected period' });
        }
        res.json({ success: true, data: results });
    });
});

// GET API - BMC Input data from BMLCUSTM2.RM_SHIPPING_HDR
app.get('/api/bmc/input', (req, res) => {
    const { filter, start, end } = req.query;

    let query;
    let bindParams = {};

    const baseQ = (dateCondition) => `
        SELECT 
            MIN(TRUNC(SHIPPED_DATE)) AS DATE_START,
            MAX(TRUNC(SHIPPED_DATE)) AS DATE_END,
            COUNT(DISTINCT RECEIPT_SOURCE_CODE) AS TOTAL_BMCS,
            SUM(QUANTITY_RECEIVED) AS TOTAL_QUANTITY,
            ROUND(AVG(AVG_FAT), 2) AS AVG_FAT,
            ROUND(AVG(AVG_SNF), 2) AS AVG_SNF
        FROM BMLCUSTM2.RM_SHIPPING_HDR
        WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%'
        AND ${dateCondition}
    `;

    if (filter === 'today') {
        query = baseQ(`TRUNC(SHIPPED_DATE) = TRUNC(SYSDATE)`);
    } else if (filter === 'yesterday') {
        query = baseQ(`TRUNC(SHIPPED_DATE) = TRUNC(SYSDATE - 1)`);
    } else if (filter === 'custom' && start && end) {
        query = baseQ(`TRUNC(SHIPPED_DATE) >= TO_DATE(:start, 'YYYY-MM-DD') AND TRUNC(SHIPPED_DATE) <= TO_DATE(:end, 'YYYY-MM-DD')`);
        bindParams = { start, end };
    } else if (filter === 'week') {
        query = baseQ(`SHIPPED_DATE >= TRUNC(SYSDATE) - (TO_CHAR(SYSDATE, 'D') - 1) AND SHIPPED_DATE < TRUNC(SYSDATE) + 1`);
    } else if (filter === 'month') {
        query = baseQ(`SHIPPED_DATE >= TRUNC(SYSDATE, 'MM') AND SHIPPED_DATE < TRUNC(SYSDATE) + 1`);
    } else {
        query = baseQ(`TRUNC(SHIPPED_DATE) = TRUNC(SYSDATE)`);
    }
    
    oracledb.getConnection().then(connection => {
        return connection.execute(query, bindParams, { outFormat: oracledb.OUT_FORMAT_OBJECT })
            .then(result => {
                connection.close();
                res.json({ success: true, data: result.rows || [] });
            })
            .catch(err => {
                connection.close();
                console.error('Query error:', err);
                res.status(500).json({ success: false, error: err.message });
            });
    }).catch(err => {
        console.error('Connection error:', err);
        res.status(500).json({ success: false, error: err.message });
    });
});

// GET API - BMC Output data from BMLCUSTM2.RM_SHIPPING_HDR
app.get('/api/bmc/output', (req, res) => {
    const { filter, start, end } = req.query;
    
    let query;
    let bindParams = {};
    
    if (filter === 'today') {
        query = `SELECT SHIPPED_DATE, SHIFT, RECEIPT_SOURCE_CODE, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%' AND TRUNC(SHIPPED_DATE) = TRUNC(SYSDATE) ORDER BY SHIPPED_DATE DESC`;
    } else if (filter === 'yesterday') {
        query = `SELECT SHIPPED_DATE, SHIFT, RECEIPT_SOURCE_CODE, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%' AND TRUNC(SHIPPED_DATE) = TRUNC(SYSDATE - 1) ORDER BY SHIPPED_DATE DESC`;
    } else if (filter === 'custom' && start && end) {
        query = `SELECT SHIPPED_DATE, SHIFT, RECEIPT_SOURCE_CODE, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%' AND TRUNC(SHIPPED_DATE) >= TO_DATE(:start, 'YYYY-MM-DD') AND TRUNC(SHIPPED_DATE) <= TO_DATE(:end, 'YYYY-MM-DD') ORDER BY SHIPPED_DATE DESC`;
        bindParams = { start, end };
    } else if (filter === 'week') {
        query = `SELECT SHIPPED_DATE, SHIFT, RECEIPT_SOURCE_CODE, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%' AND SHIPPED_DATE >= TRUNC(SYSDATE) - (TO_CHAR(SYSDATE, 'D') - 1) AND SHIPPED_DATE < TRUNC(SYSDATE) + 1 ORDER BY SHIPPED_DATE DESC`;
    } else if (filter === 'month') {
        query = `SELECT SHIPPED_DATE, SHIFT, RECEIPT_SOURCE_CODE, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%' AND SHIPPED_DATE >= TRUNC(SYSDATE, 'MM') AND SHIPPED_DATE < TRUNC(SYSDATE) + 1 ORDER BY SHIPPED_DATE DESC`;
    } else {
        query = `SELECT SHIPPED_DATE, SHIFT, RECEIPT_SOURCE_CODE, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE '%BMC%' AND SHIPPED_DATE >= TRUNC(SYSDATE) - 10 ORDER BY SHIPPED_DATE DESC`;
    }
    
    oracledb.getConnection().then(connection => {
        return connection.execute(query, bindParams, { outFormat: oracledb.OUT_FORMAT_OBJECT })
            .then(result => {
                connection.close();
                res.json({ success: true, data: result.rows || [] });
            })
            .catch(err => {
                connection.close();
                console.error('Query error:', err);
                res.status(500).json({ success: false, error: err.message });
            });
    }).catch(err => {
        console.error('Connection error:', err);
        res.status(500).json({ success: false, error: err.message });
    });
});

// GET API - CC Input data from BMLCUSTM2.RM_SHIPPING_HDR
app.get('/api/cc', (req, res) => {
    const { filter, start, end } = req.query;
    
    let query;
    let bindParams = {};

    const baseQuery = (dateCondition) => `
        SELECT 
            LISTAGG(END_LOCATION_NAME, ', ') WITHIN GROUP (ORDER BY END_LOCATION_NAME) AS LOCATION_NAMES,
            SUM(QUANTITY_RECEIVED) AS TOTAL_QUANTITY,
            SUM(TOTAL_RECORDS) AS TOTAL_RECORDS
        FROM (
            SELECT 
                t.END_LOCATION_NAME,
                SUM(r.QUANTITY_RECEIVED) AS QUANTITY_RECEIVED,
                COUNT(*) AS TOTAL_RECORDS
            FROM BMLCUSTM2.RM_SHIPPING_HDR r
            LEFT JOIN BMLCUSTM2.TR_ROUTE t ON r.ROUTE_NO = t.ROUTE_NUMBER
            WHERE UPPER(t.END_LOCATION_NAME) LIKE '%CHILLING%'
            AND ${dateCondition}
            GROUP BY t.END_LOCATION_NAME
        )
    `;
    
    if (filter === 'today') {
        query = baseQuery(`TRUNC(r.SHIPPED_DATE) = TRUNC(SYSDATE)`);
    } else if (filter === 'yesterday') {
        query = baseQuery(`TRUNC(r.SHIPPED_DATE) = TRUNC(SYSDATE - 1)`);
    } else if (filter === 'custom' && start && end) {
        query = baseQuery(`TRUNC(r.SHIPPED_DATE) >= TO_DATE(:start, 'YYYY-MM-DD') AND TRUNC(r.SHIPPED_DATE) <= TO_DATE(:end, 'YYYY-MM-DD')`);
        bindParams = { start, end };
    } else if (filter === 'week') {
        query = baseQuery(`r.SHIPPED_DATE >= TRUNC(SYSDATE) - (TO_CHAR(SYSDATE, 'D') - 1) AND r.SHIPPED_DATE < TRUNC(SYSDATE) + 1`);
    } else if (filter === 'month') {
        query = baseQuery(`r.SHIPPED_DATE >= TRUNC(SYSDATE, 'MM') AND r.SHIPPED_DATE < TRUNC(SYSDATE) + 1`);
    } else {
        query = baseQuery(`TRUNC(r.SHIPPED_DATE) = TRUNC(SYSDATE)`);
    }
    
    oracledb.getConnection().then(connection => {
        return connection.execute(query, bindParams, { outFormat: oracledb.OUT_FORMAT_OBJECT })
            .then(result => {
                connection.close();
                res.json({ success: true, data: result.rows || [] });
            })
            .catch(err => {
                connection.close();
                console.error('Query error:', err);
                res.status(500).json({ success: false, error: err.message });
            });
    }).catch(err => {
        console.error('Connection error:', err);
        res.status(500).json({ success: false, error: err.message });
    });
});

// GET API - CC Output data from BMLCUSTM2.RM_SHIPPING_HDR
app.get('/api/cc/output', (req, res) => {
    const { filter, start, end } = req.query;
    
    let query;
    let bindParams = {};
    
    if (filter === 'today') {
        query = `SELECT SHIPPED_DATE, RECEIPT_SOURCE_CODE AS TO_SUBINVENTORY, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE 'RMRD%' AND SHIPPED_DATE >= TRUNC(SYSDATE) AND SHIPPED_DATE < TRUNC(SYSDATE) + 1 ORDER BY SHIPPED_DATE DESC`;
    } else if (filter === 'yesterday') {
        query = `SELECT SHIPPED_DATE, RECEIPT_SOURCE_CODE AS TO_SUBINVENTORY, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE 'RMRD%' AND SHIPPED_DATE >= TRUNC(SYSDATE) - 1 AND SHIPPED_DATE < TRUNC(SYSDATE) ORDER BY SHIPPED_DATE DESC`;
    } else if (filter === 'custom' && start && end) {
        query = `SELECT SHIPPED_DATE, RECEIPT_SOURCE_CODE AS TO_SUBINVENTORY, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE 'RMRD%' AND TRUNC(SHIPPED_DATE) >= TO_DATE(:start, 'YYYY-MM-DD') AND TRUNC(SHIPPED_DATE) <= TO_DATE(:end, 'YYYY-MM-DD') ORDER BY SHIPPED_DATE DESC`;
        bindParams = { start, end };
    } else if (filter === 'week') {
        query = `SELECT SHIPPED_DATE, RECEIPT_SOURCE_CODE AS TO_SUBINVENTORY, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE 'RMRD%' AND SHIPPED_DATE >= TRUNC(SYSDATE) - (TO_CHAR(SYSDATE, 'D') - 1) AND SHIPPED_DATE < TRUNC(SYSDATE) + 1 ORDER BY SHIPPED_DATE DESC`;
    } else if (filter === 'month') {
        query = `SELECT SHIPPED_DATE, RECEIPT_SOURCE_CODE AS TO_SUBINVENTORY, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE 'RMRD%' AND SHIPPED_DATE >= TRUNC(SYSDATE, 'MM') AND SHIPPED_DATE < TRUNC(SYSDATE) + 1 ORDER BY SHIPPED_DATE DESC`;
    } else {
        query = `SELECT SHIPPED_DATE, RECEIPT_SOURCE_CODE AS TO_SUBINVENTORY, VENDOR_NAME, ROUTE_NO, QUANTITY_SHIPPED, AVG_FAT, AVG_SNF, TEMPERATURE, RECEIPT_STATUS FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE RECEIPT_SOURCE_CODE LIKE 'RMRD%' AND SHIPPED_DATE >= TRUNC(SYSDATE) - 10 ORDER BY SHIPPED_DATE DESC`;
    }
    
    oracledb.getConnection().then(connection => {
        return connection.execute(query, bindParams, { outFormat: oracledb.OUT_FORMAT_OBJECT })
            .then(result => {
                connection.close();
                res.json({ success: true, data: result.rows || [] });
            })
            .catch(err => {
                connection.close();
                console.error('Query error:', err);
                res.status(500).json({ success: false, error: err.message });
            });
    }).catch(err => {
        console.error('Connection error:', err);
        res.status(500).json({ success: false, error: err.message });
    });
});

// Utility function to format numbers in Indian numbering system with commas
function formatIndianNumber(num) {
    const n = parseFloat(num);
    if (isNaN(n)) return num;
    
    const [integer, decimal] = n.toFixed(2).split('.');
    let lastThree = integer.substring(integer.length - 3);
    const otherNumbers = integer.substring(0, integer.length - 3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + '.' + decimal;
}

// GET API - Dairy data with route mapping
app.get('/api/dairy', (req, res) => {
    const { filter, start, end } = req.query;

    let query;
    let bindParams = {};
    const isSummary = filter === 'week' || filter === 'month' || (filter === 'custom' && start && end);

    const detailQuery = (dateCondition) => `
        SELECT 
            t.END_LOCATION_NAME AS DAIRY_NAME,
            TRUNC(r.SHIPPED_DATE) AS SALE_DATE,
            NULL AS SALE_DATE_END,
            SUM(r.QUANTITY_RECEIVED) AS TOTAL_QUANTITY
        FROM BMLCUSTM2.RM_SHIPPING_HDR r
        LEFT JOIN BMLCUSTM2.TR_ROUTE t ON r.ROUTE_NO = t.ROUTE_NUMBER
        WHERE t.END_LOCATION_NAME IN ('BANGALORE MAIN DAIRY', 'HOSAKOTE CHILLING CENTRE', 'KANAKAPURA DAIRY')
        AND ${dateCondition}
        GROUP BY t.END_LOCATION_NAME, TRUNC(r.SHIPPED_DATE)
        ORDER BY TRUNC(r.SHIPPED_DATE) DESC
    `;

    const summaryQuery = (dateCondition) => `
        SELECT 
            t.END_LOCATION_NAME AS DAIRY_NAME,
            TRUNC(MIN(r.SHIPPED_DATE)) AS SALE_DATE,
            TRUNC(MAX(r.SHIPPED_DATE)) AS SALE_DATE_END,
            SUM(r.QUANTITY_RECEIVED) AS TOTAL_QUANTITY
        FROM BMLCUSTM2.RM_SHIPPING_HDR r
        LEFT JOIN BMLCUSTM2.TR_ROUTE t ON r.ROUTE_NO = t.ROUTE_NUMBER
        WHERE t.END_LOCATION_NAME IN ('BANGALORE MAIN DAIRY', 'HOSAKOTE CHILLING CENTRE', 'KANAKAPURA DAIRY')
        AND ${dateCondition}
        GROUP BY t.END_LOCATION_NAME
    `;

    const qFn = isSummary ? summaryQuery : detailQuery;

    if (filter === 'today') {
        query = qFn(`TRUNC(r.SHIPPED_DATE) = TRUNC(SYSDATE)`);
    } else if (filter === 'yesterday') {
        query = qFn(`TRUNC(r.SHIPPED_DATE) = TRUNC(SYSDATE) - 1`);
    } else if (filter === 'custom' && start && end) {
        query = qFn(`TRUNC(r.SHIPPED_DATE) >= TO_DATE(:start, 'YYYY-MM-DD') AND TRUNC(r.SHIPPED_DATE) <= TO_DATE(:end, 'YYYY-MM-DD')`);
        bindParams = { start, end };
    } else if (filter === 'week') {
        query = qFn(`r.SHIPPED_DATE >= TRUNC(SYSDATE) - (TO_CHAR(SYSDATE, 'D') - 1) AND r.SHIPPED_DATE < TRUNC(SYSDATE) + 1`);
    } else if (filter === 'month') {
        query = qFn(`r.SHIPPED_DATE >= TRUNC(SYSDATE, 'MM') AND r.SHIPPED_DATE < TRUNC(SYSDATE) + 1`);
    } else {
        query = qFn(`TRUNC(r.SHIPPED_DATE) = TRUNC(SYSDATE)`);
    }
    
    oracledb.getConnection().then(connection => {
        return connection.execute(query, bindParams, { outFormat: oracledb.OUT_FORMAT_OBJECT })
            .then(result => {
                connection.close();
                
                const bengaluru = result.rows.filter(row => 
                    row.DAIRY_NAME && (row.DAIRY_NAME.toUpperCase().includes('BANGALORE') || row.DAIRY_NAME.toUpperCase().includes('BENGALURU'))
                );
                const hoskote = result.rows.filter(row => 
                    row.DAIRY_NAME && row.DAIRY_NAME.toUpperCase() === 'HOSAKOTE CHILLING CENTRE'
                );
                const kanakapura = result.rows.filter(row => 
                    row.DAIRY_NAME && row.DAIRY_NAME.toUpperCase().includes('KANAKAPURA')
                );
                
                res.json({ 
                    success: true, 
                    data: {
                        bengaluru,
                        hoskote,
                        kanakapura
                    }
                });
            })
            .catch(err => {
                connection.close();
                console.error('Dairy Query error:', err);
                res.status(500).json({ success: false, error: err.message });
            });
    }).catch(err => {
        console.error('Dairy Connection error:', err);
        res.status(500).json({ success: false, error: err.message });
    });
});

// Debug endpoint to check available RECEIPT_SOURCE_CODE values
app.get('/api/debug/receipt-codes', (req, res) => {
    const query = `SELECT DISTINCT RECEIPT_SOURCE_CODE FROM BMLCUSTM2.RM_SHIPPING_HDR WHERE ROWNUM <= 50 ORDER BY RECEIPT_SOURCE_CODE`;
    
    oracledb.getConnection().then(connection => {
        return connection.execute(query, {}, { outFormat: oracledb.OUT_FORMAT_OBJECT })
            .then(result => {
                connection.close();
                res.json({ success: true, data: result.rows });
            })
            .catch(err => {
                connection.close();
                console.error('Query error:', err);
                res.status(500).json({ success: false, error: err.message });
            });
    }).catch(err => {
        console.error('Connection error:', err);
        res.status(500).json({ success: false, error: err.message });
    });
});

// GET API - Bamul Sales Data (variant-wise)
app.get('/api/sales', (req, res) => {
    const { filter, start, end } = req.query;

    const baseQ = (where) => `SELECT v.name AS variant_name, SUM(s.produced_ai_with_correction) AS total_produced FROM sales_entry s JOIN variants v ON s.variant_id = v.id WHERE ${where} GROUP BY s.variant_id, v.name ORDER BY v.name`;

    let query;
    let params = [];

    if (filter === 'today') {
        query = baseQ(`s.entry_date >= CURDATE() AND s.entry_date < CURDATE() + INTERVAL 1 DAY`);
    } else if (filter === 'yesterday') {
        query = baseQ(`s.entry_date >= CURDATE() - INTERVAL 1 DAY AND s.entry_date < CURDATE()`);
    } else if (filter === 'custom' && start && end) {
        query = baseQ(`s.entry_date >= ? AND s.entry_date <= ?`);
        params = [start, end];
    } else if (filter === 'week') {
        query = baseQ(`s.entry_date >= DATE_SUB(CURDATE(), INTERVAL DAYOFWEEK(CURDATE()) - 1 DAY)`);
    } else if (filter === 'month') {
        query = baseQ(`s.entry_date >= DATE_FORMAT(CURDATE(), '%Y-%m-01')`);
    } else {
        query = baseQ(`s.entry_date >= CURDATE() AND s.entry_date < CURDATE() + INTERVAL 1 DAY`);
    }

    dbSales.query(query, params, (err, results) => {
        if (err) {
            console.error('Sales Query error:', err);
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, data: results || [] });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
