import express from 'express';
import { getAllProducts, createProduct, getProductById,updateProduct,deleteProduct} from '../controllers/productController.js';

const productRouter = express.Router();

// Rutas para productos
productRouter.get('/', getAllProducts);
productRouter.post('/', createProduct);
productRouter.get('/:pid', getProductById);
productRouter.put('/:pid', updateProduct);
productRouter.delete('/:pid', deleteProduct);
// La ruta DELETE /:pid deberá eliminar el 
// producto con el pid indicado. 

export default productRouter;
