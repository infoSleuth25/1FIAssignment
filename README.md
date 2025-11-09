# 1FI Assignment 

## Tech Stack
Backend: Node.js, Express.js. <br>
Database: MongoDB with Mongoose. <br>
File Uploads: Multer. <br>
Cloud Storage: Cloudinary. <br>
Frontend : React, Tailwind. <br>

## Database Schema
ProductName : String <br>
Product Images : [{<br>
    Public Id : String,  <br>
    url : String. <br>
}],  <br>
ProductDescription : String,  <br>
ProductDetails : [{<br>
    color : String,  <br>
    storage : Number,  <br>
    ram : Number, <br> 
    price : Number,<br>
    cashback : Number<br>
}]<br>

## Setup

1> Clone The Repository<br>
git clone https://github.com/infoSleuth25/1FIAssignment

2> Create .env file in server<br>
PORT = portno<br>
DB_CONNECT = dburl<br>
CLOUDINARY_CLOUD_NAME = your cloudinary name<br>
CLOUDINARY_API_KEY = your cloudinary key<br>
CLOUDINARY_API_SECRET = your secret<br>

3> Install Dependenices<br>
cd server -> npm install -> npm run dev<br>
cd client -> npm install -> npm run dev<br>


## API Endpoints
I have created 3 endpoints<br>
1> POST localhost:3000/api/products/addProduct<br>
This API will add product in your database<br>

| Field                | Type            | Description                                   |
| -------------------- | --------------- | --------------------------------------------- |
| `productName`        | string          | Name of the product                           |
| `productDescription` | string          | Description of product                        |
| `productDetails`     | JSON string     | Array of color, storage, ram, price, cashback |
| `files`              | array of images | 1–5 product images                            |

Example (using JSON for productDetails):<br>

[
  {"color":"Green","storage":128,"ram":8,"price":79999,"cashback":1000},
  {"color":"White","storage":256,"ram":8,"price":89999,"cashback":2000}
]

2> Get localhost:3000/api/products/allProducts<br>
THis API will return all products.<br>

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

3> Get localhost:3000/api/products/690d9bc1fbdfc8a2631448d8<br>
Return details of product with given id<br>

Response : 
{
  "msg": "Product received successfully",
  "product": { ...full product document... }
}

