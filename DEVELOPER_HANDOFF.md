# Bangalore Dairy Dashboard — Developer Handoff

## Overview

The frontend dashboard is fully built (7 HTML files, pure HTML/CSS/JS).  
The backend API is partially running on the OCI server but has broken/missing DB connections.  
Your job is to fix the backend so all API endpoints return real data from SQL Server.

---

## OCI Server

| Item | Value |
|------|-------|
| Public IP | `129.159.231.57` |
| OS | Oracle Linux (nginx) |
| Web root | `/var/www/html/` |
| API base path | `http://129.159.231.57/papi/bangalore/<endpoint>?filter=<range>` |

---

## SQL Server Details

| Item | Value |
|------|-------|
| Host | OCI Private IP (same server or internal host) |
| Port | `1433` |
| Authentication | SQL Server Authentication |
| Username | `api_user` (create this) or existing SQL login |
| Password | `<password you set>` |
| Database 1 | `BAMUL` — milk receipt / truck entry data |
| Database 2 | `BAMUL_MIS` — RMST, PMST, HMST, Curd, Cream data |

> The frontend never connects to SQL Server directly. All DB access goes through the Node.js API only.

---

## Current API Status

| Endpoint | Status | Issue |
|----------|--------|-------|
| `GET /papi/bangalore/milk-dispatch-truck` | ✅ Working | Returns 45 records, data is live |
| `GET /papi/bangalore/truck-entry` | ❌ Broken | `Login failed for user 'sa'` — wrong DB credentials in config |
| `GET /papi/bangalore/rmst` | ⚠️ Empty | Connected but returns `data: []` — query may be wrong or table is in wrong DB |
| `GET /papi/bangalore/pmst` | ⚠️ Empty | Same as above |
| `GET /papi/bangalore/hmst` | ⚠️ Empty | Same as above |
| `GET /papi/bangalore/curd` | ⚠️ Empty | Same as above |
| `GET /papi/bangalore/cream` | ⚠️ Empty | Same as above |

**Root cause:** The backend is using `sa` as the SQL login for `truck-entry`. Replace with `api_user` credentials across all endpoints. The RMST/PMST/HMST/Curd/Cream endpoints are likely querying `BAMUL` instead of `BAMUL_MIS`.

---

## API Contract (what the frontend expects)

All endpoints follow this response shape:
```json
{ "success": true, "data": [ ... ] }
```

### `GET /papi/bangalore/truck-entry?filter=<range>`
**Database:** `BAMUL`  
**Purpose:** Weigh bridge truck receipts (milk inward)

Expected fields per row:
```json
{
  "NetWeight": 12500,
  "Fat_First": "3.52",
  "SNF_First": "8.41"
}
```

---

### `GET /papi/bangalore/rmst?filter=<range>`
**Database:** `BAMUL_MIS`  
**Purpose:** Raw Milk Storage Tank receipts

Expected fields per row:
```json
{
  "RMSID": "1",
  "TotalQty": 45000,
  "AvgFat": 3.52,
  "AvgSNF": 8.41
}
```
Tank IDs expected: `1, 2, 3, 4, 4A`

---

### `GET /papi/bangalore/pmst?filter=<range>`
**Database:** `BAMUL_MIS`  
**Purpose:** Pasteurized Milk Storage Tank receipts

Expected fields per row:
```json
{
  "PMSID": "5",
  "TotalProcessed": 38000,
  "AvgFat": 3.10,
  "AvgSNF": 8.30
}
```
Tank IDs expected: `5, 6, 7, 8, 9, 10`

---

### `GET /papi/bangalore/hmst?filter=<range>`
**Database:** `BAMUL_MIS`  
**Purpose:** Homogenised Milk Storage Tank receipts

Expected fields per row:
```json
{
  "HMSTID": "1",
  "TotalQty": 22000,
  "AvgFat": 3.00,
  "AvgSNF": 8.20
}
```
Tank IDs expected: `1, 2, 3, 4, 5`

---

### `GET /papi/bangalore/curd?filter=<range>`
**Database:** `BAMUL_MIS`  
**Purpose:** Curd tank milk receipts

Expected fields per row:
```json
{
  "TankID": "1",
  "TotalQty": 8000,
  "Entries": 12
}
```
Tank IDs expected: `1, 2`

---

### `GET /papi/bangalore/cream?filter=<range>`
**Database:** `BAMUL_MIS`  
**Purpose:** Cream storage tank receipts

Expected fields per row:
```json
{
  "TotalQty": 3500,
  "Entries": 5,
  "AvgFat": 35.0
}
```

---

### `GET /papi/bangalore/milk-dispatch-truck?filter=<range>`
**Database:** `BAMUL`  
**Purpose:** Outbound milk dispatch trucks  
**Status:** ✅ Already working

Current fields returned (confirmed live):
```json
{
  "Date": "2026-07-10T00:00:00.000Z",
  "TruckNumber": "KA05AG6678",
  "DairyCode": "NMP",
  "ProductCode": "RAW MILK",
  "GrossWeight": 15120,
  "TareWeight": 9825,
  "NetWeight": 5295,
  "Fat_First": "0.0",
  "SNF_First": "0.0",
  "IsCompleted": true
}
```

---

## Filter Parameter

All endpoints accept `?filter=` with these values:

| Value | Meaning |
|-------|---------|
| `yesterday` | Previous day only |
| `week` | Current week (Mon–today) |
| `month` | Current month (default) |
| `custom&start=YYYY-MM-DD&end=YYYY-MM-DD` | Custom date range |

---

## CORS

The frontend is served from the same origin (`http://129.159.231.57`), so CORS is not required. If you serve the frontend from a different domain/port, add:
```
Access-Control-Allow-Origin: *
```

---

## Frontend Deployment

Once the API is fixed, deploy the 7 HTML files to nginx:

```bash
sudo cp *.html /var/www/html/bangalore-dairy-dashboard/
```

Access the dashboard at:  
`http://129.159.231.57/bangalore-dairy-dashboard/bangalore-dairy-dashboard.html`

---

## Files in This Project

| File | Purpose |
|------|---------|
| `bangalore-dairy-dashboard.html` | Main plant flow dashboard (entry point) |
| `weigh-bridge-receipts.html` | Stage 1 — truck entry detail |
| `rmst-details.html` | Stage 2 — raw milk storage tanks |
| `pmst-details.html` | Stage 4 — pasteurized milk storage tanks |
| `hmst-details.html` | Stage 5B — homogenised milk storage tanks |
| `curd-tank-details.html` | Stage 5A — curd tanks |
| `milk-dispatch-details.html` | Outbound milk dispatch |

---

## Summary of Actions Required

1. **Fix `truck-entry` endpoint** — replace `sa` credentials with `api_user` in the backend config, point to `BAMUL` database
2. **Fix RMST/PMST/HMST/Curd/Cream endpoints** — point these to `BAMUL_MIS` database, verify table names and query logic
3. **Verify filter logic** — ensure date filtering works correctly for all 4 filter values
4. **Deploy HTML files** to `/var/www/html/bangalore-dairy-dashboard/` on the OCI server
