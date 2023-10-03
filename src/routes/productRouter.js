import express from 'express';
import { getAllProducts, createProduct, getProductById } from '../controllers/productController.js';

const productRouter = express.Router();

// Rutas para productos
productRouter.get('/', getAllProducts);
productRouter.post('/', createProduct);
productRouter.get('/:pid', getProductById);

export default productRouter;
