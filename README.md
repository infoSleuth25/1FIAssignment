# 1FI Assignment 

## Tech Stack
Backend: Node.js, Express.js. 
Database: MongoDB with Mongoose. 
File Uploads: Multer. 
Cloud Storage: Cloudinary. 
Frontend : React, Tailwind. 

## Database Schema
ProductName : String
Product Images : [{
    Public Id : String,  
    url : String. 
}],  
ProductDescription : String,  
ProductDetails : [{
    color : String,  
    storage : Number,  
    ram : Number,  
    price : Number,
    cashback : Number
}]

## Setup

1> Clone The Repository
git clone https://github.com/infoSleuth25/1FIAssignment

2> Create .env file in server
PORT = portno
DB_CONNECT = dburl
CLOUDINARY_CLOUD_NAME = your cloudinary name
CLOUDINARY_API_KEY = your cloudinary key
CLOUDINARY_API_SECRET = your secret

3> Install Dependenices
cd server -> npm install -> npm run dev
cd client -> npm install -> npm run dev


## API Endpoints
I have created 3 endpoints
1> POST localhost:3000/api/products/addProduct
This API will add product in your database

| Field                | Type            | Description                                   |
| -------------------- | --------------- | --------------------------------------------- |
| `productName`        | string          | Name of the product                           |
| `productDescription` | string          | Description of product                        |
| `productDetails`     | JSON string     | Array of color, storage, ram, price, cashback |
| `files`              | array of images | 1–5 product images                            |

Example (using JSON for productDetails):

[
  {"color":"Green","storage":128,"ram":8,"price":79999,"cashback":1000},
  {"color":"White","storage":256,"ram":8,"price":89999,"cashback":2000}
]

2> Get localhost:3000/api/products/allProducts
THis API will return all products.

Response : 
{
  "msg": "All products received successfully",
  "products": [
    {
      "_id": "64a2f5b23b2e5d9c",
      "productName": "iPhone 14",
      "productImages": [
        {
          "url": "https://res.cloudinary.com/...",
          "public_id": "iphone14-front"
        }
      ]
    }
  ]
}

3> Get localhost:3000/api/products/690d9bc1fbdfc8a2631448d8
Return details of product with given id

Response : 
{
  "msg": "Product received successfully",
  "product": { ...full product document... }
}

