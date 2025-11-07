import express from 'express';
const router = express.Router();
import { addProduct, getAllProducts, getProductDetails } from '../controllers/product.controller.js';
import attachmentsMulter from '../middlewares/multer.js';

router.post('/addProduct',attachmentsMulter,addProduct);
router.get('/allProducts',getAllProducts);
router.get('/:id',getProductDetails);

export default router;