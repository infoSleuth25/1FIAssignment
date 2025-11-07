import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import productRoutes from './routes/product.route.js';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/api/products',productRoutes);

export default app;