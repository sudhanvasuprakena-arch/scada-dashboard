# Milk Procurement API

## Setup

1. Install dependencies:
```bash
cd api
npm install
```

2. Create database and table:
```bash
mysql -u root -p < schema.sql
```

3. Start server:
```bash
npm start
```

## API Endpoints

### GET /api/dcs/monthly
Fetch month-wise DCS milk collection data

**Query Parameters:**
- `month` (optional): Month number (1-12)
- `year` (optional): Year (e.g., 2024)

**Example:**
```
GET http://localhost:3000/api/dcs/monthly?month=1&year=2024
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "collection_date": "2024-01-15",
      "shift_code": "M",
      "dcs_code": "DCS001",
      "member_code": "MEM001",
      "milk": 25.5,
      "fat": 4.2,
      "snf": 8.5,
      "amount": 1250.00,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

### POST /api/dcs
Add new DCS milk collection record

**Request Body:**
```json
{
  "collection_date": "2024-01-15",
  "shift_code": "M",
  "dcs_code": "DCS001",
  "member_code": "MEM001",
  "milk": 25.5,
  "fat": 4.2,
  "snf": 8.5,
  "amount": 1250.00
}
```

**Response:**
```json
{
  "success": true,
  "message": "Record added successfully",
  "data": { ... }
}
```

## Database Schema

- **collection_date**: Date of milk collection
- **shift_code**: Shift identifier (M=Morning, E=Evening)
- **dcs_code**: DCS station code
- **member_code**: Member identifier
- **milk**: Milk quantity in liters
- **fat**: Fat percentage
- **snf**: SNF (Solid Not Fat) percentage
- **amount**: Payment amount
- **created_at**: Record creation timestamp
