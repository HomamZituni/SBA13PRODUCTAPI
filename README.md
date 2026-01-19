Github Repo: https://github.com/HomamZituni/SBA13PRODUCTAPI
Vercel Repo: https://sba-13-productapi-git-main-homam-zitunis-projects.vercel.app
Vercel domain to test functionality: https://sba-13-productapi.vercel.app/

About this project:
Full-stack REST API built with Node.js, Express, Mongoose, and MongoDB Atlas. Features complete CRUD operations with advanced filtering, sorting, and pagination.

Tech Stack: 

Node.js + Express → API Framework
Mongoose → MongoDB ODM
MongoDB Atlas → Cloud Database
Vercel → Serverless Hosting

How to Test:

1. POST /api/products(Create)- Status 201
POST https://sba-13-productapi.vercel.app/api/products
Content-Type: application/json

{
  "name": "Test Laptop",
  "description": "For testing",
  "price": 999,
  "category": "electronics"
}


2. GET /api/products/:id (Read Single) - Status 200/404
GET https://sba-13-productapi.vercel.app/api/products/{PASTE_ID_FROM_POST}

3.PUT /api/products/:id (Update) - Status 200
PUT https://sba-13-productapi.vercel.app/api/products/{PRODUCT_ID}
Content-Type: application/json

{"price": 1099}

4. DELETE /api/products/:id (Delete) - Status 200
DELETE https://sba-13-productapi.vercel.app/api/products/{PRODUCT_ID}

5.  GET /api/products (Advanced Querying) - All Features
Basic: GET /api/products → Array of products
Category: GET /api/products?category=electronics → Filtered
Price range: GET /api/products?minPrice=500&maxPrice=1500 → Price filtered  
Pagination: GET /api/products?page=1&limit=2 → 2 products max


