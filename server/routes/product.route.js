import express from 'express';
const router = express.Router();
import { addProduct } from '../controllers/product.controller.js';
import attachmentsMulter from '../middlewares/multer.js';

router.post('/addProduct',attachmentsMulter,addProduct);

export default router;