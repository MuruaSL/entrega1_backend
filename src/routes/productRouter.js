import express from 'express';
import { getAllProducts, createProduct, getProductById,updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

// Rutas para productos
productRouter.get('/', getAllProducts);
productRouter.post('/', createProduct);
productRouter.get('/:pid', getProductById);
productRouter.put('/:pid', updateProduct)
export default productRouter;
