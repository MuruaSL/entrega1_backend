import ProductManager from '../logic/productManager.js';

const productManager = new ProductManager('json/productos.json');

export const getAllProducts = (req, res) => {
    try {
        const { limit } = req.query; // Obtener el valor del parámetro "limit" de la consulta
        const products = productManager.getProducts();

        if (limit) {
            const limitedProducts = products.slice(0, parseInt(limit)); // Limitar la cantidad de productos
            res.json(limitedProducts);
        } else {
            res.json(products);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};


export const createProduct = (req, res) => {
const { title, description, price, code,stock,thumbnails } = req.body;
try {
    const newProduct = productManager.addProduct( title, description, price, code,stock,thumbnails);
    res.status(201).json(newProduct);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

export const getProductById = (req, res) => {
const productId = parseInt(req.params.pid);
try {
    const product = productManager.getProductById(productId);
    res.json(product);
} catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
}
};

export const updateProduct = (req, res) => {
    const productId = parseInt(req.params.pid); // Obtener el ID del producto de los parámetros de la ruta
    const { title, description, price, thumbnails, code, stock } = req.body; // Extraer los valores a actualizar por body
    
    try {
        // Llama a una función en tu ProductManager que actualice el producto por su ID
        const updatedProduct = productManager.updateProduct(productId, {
            title,
            description,
            price,
            thumbnails,
            code,
            stock
        });
        
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};