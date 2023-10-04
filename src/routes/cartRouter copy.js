import express from 'express';
import CartManager from '../logic/cartManager.js';

const cartManager = new CartManager();
const cartRouter = express.Router();

// Ruta para crear un nuevo carrito
cartRouter.post('/', (req, res) => { 
    try {
        const { products } = req.body;
        const newCart = cartManager.createCart(products);
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el carrito' });
    }
});

// Ruta para obtener un carrito por su ID
cartRouter.get('/:cid', (req, res) => { 
    const cartId = req.params.cid;
    const cart = cartManager.getCartById(cartId);

    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
    }
});

// Ruta para agregar un producto al carrito
cartRouter.post('/:cid/product/:pid', (req, res) => { 
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const { quantity } = req.body;

    try {
        const updatedCart = cartManager.addToCart(cartId, productId, quantity);
        res.json(updatedCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default cartRouter;
