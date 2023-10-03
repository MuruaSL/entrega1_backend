import express from 'express';
import { getAllProducts, createProduct, getProductById } from '../controllers/productController.js';

const productRouter = express.Router();

// Rutas para productos
productRouter.get('/', getAllProducts);
productRouter.post('/', createProduct);
productRouter.get('/:pid', getProductById);
productRouter.put('/:pid',)
// La ruta PUT /:pid deberá tomar un 
// producto y actualizarlo por los campos 
// enviados desde body. NUNCA se debe 
// actualizar o eliminar el id al momento de 
// hacer dicha actualización
export default productRouter;
