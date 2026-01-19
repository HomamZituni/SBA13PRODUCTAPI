# Zenith Product API 

**Live API:** https://sba-13-productapi.vercel.app/api/products

**GitHub:** https://github.com/HomamZituni/SBA13PRODUCTAPI

Full-stack REST API with Node.js, Express, Mongoose, MongoDB Atlas. Complete CRUD + advanced filtering, sorting, pagination.

## Tech Stack
Node.js + Express -> API Framework
Mongoose -> MongoDB ODM
MongoDB Atlas -> Cloud Database
Vercel -> Serverless Hosting


## Test Instructions (Postman Required)

### 1. Create Product (201)
POST https://sba-13-productapi.vercel.app/api/products
Content-Type: application/json

{
"name": "Test Laptop",
"description": "For testing",
"price": 999,
"category": "electronics"
}

### 2. Read Single (200/404)
GET https://sba-13-productapi.vercel.app/api/products/{PASTE_ID_HERE}


### 3. Update Product (200)
PUT https://sba-13-productapi.vercel.app/api/products/{PASTE_ID_HERE}
Content-Type: application/json

{"price": 1099}


### 4. Delete Product (200)
DELETE https://sba-13-productapi.vercel.app/api/products/{PASTE_ID_HERE}


### 5. Advanced GET /api/products Querying
GET /api/products → All products
GET /api/products?category=electronics → Category filter
GET /api/products?minPrice=500&maxPrice=1500 → Price range
GET /api/products?page=1&limit=2 → Pagination
