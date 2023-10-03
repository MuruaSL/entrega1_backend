import ProductManager from '../logic/productManager.js';

const productManager = new ProductManager('json/productos.json');

export const getAllProducts = (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
};

export const createProduct = (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body;
    try {
        const newProduct = productManager.addProduct(title, description, price, thumbnail, code, stock);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getProductById = (req, res) => {
    const productId = req.params.pid; 
    try {
        const product = productManager.getProductById(productId);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
};
