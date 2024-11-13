// routes/cartRoutes.js
const express = require('express');
const CartItem = require('../models/CartItem');
const router = express.Router();

router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        const newCartItem = await CartItem.create({ userId, productId,quantity });
        res.status(201).json({ message: 'Carrito creado', CartItem: newCartItem });
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar carrito' });
    }
});

router.get('/show', async (req,res) =>{
    res.status(200).json({message: 'echo'})
});

/*
// Ruta para agregar un producto al carrito
router.post('/:userId/cart', async (req, res) => {
    const { userId } = req.params; // ID del usuario
    const { productId, quantity } = req.body; // Detalles del producto y cantidad

    try {
        // Verificar que el usuario exista
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        // Verificar que el producto exista
        const product = await Product.findByPk(productId);
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

        // Verificar si el usuario ya tiene un carrito
        let cart = await Cart.findOne({ where: { userId } });
        if (!cart) {
            // Si no tiene carrito, crear uno
            cart = await Cart.create({ userId });
        }

        // Crear un item en el carrito
        const cartItem = await CartItem.create({
            cartId: cart.id,
            productId,
            quantity,
        });

        return res.status(201).json(cartItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al agregar el producto al carrito' });
    }
});

*/

module.exports = router;
