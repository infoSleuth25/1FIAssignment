import http from 'http';
import app from './app.js';
const port = process.env.PORT || 4000;

import connectToDB from './db/conn.js';
connectToDB(process.env.DB_CONNECT)

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})