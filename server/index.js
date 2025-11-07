import http from 'http';
import app from './app.js';
import {v2 as cloudinary} from 'cloudinary';
const port = process.env.PORT || 4000;

import connectToDB from './db/conn.js';
connectToDB(process.env.DB_CONNECT)
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
})


const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})