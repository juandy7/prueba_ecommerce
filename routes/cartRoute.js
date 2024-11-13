// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const { Cart, CartItem, Product } = require('../models');

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

module.exports = router;
