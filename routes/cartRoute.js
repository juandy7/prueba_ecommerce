const express = require('express');
const CartItem = require('../models/CartItem'); // Modelo de carrito
const router = express.Router();

// Ruta para agregar un ítem al carrito
router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        const newCartItem = await CartItem.create({ userId, productId, quantity });
        res.status(201).json({ message: 'Carrito creado', cartItem: newCartItem });
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar carrito', details: error.message });
    }
});

// Ruta para mostrar los ítems del carrito de un usuario específico
router.get('/show/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const cartItems = await CartItem.findAll({ where: { userId } });
        if (cartItems.length === 0) {
            return res.status(404).json({ message: 'El carrito está vacío' });
        }
        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar el carrito', details: error.message });
    }
});

// Ruta para eliminar un ítem del carrito
router.delete('/delete/:cartItemId', async (req, res) => {
    const { cartItemId } = req.params;

    try {
        const deletedItem = await CartItem.destroy({ where: { id: cartItemId } });

        if (deletedItem) {
            res.status(200).json({ message: 'Producto eliminado del carrito' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto', details: error.message });
    }
});

// Ruta para vaciar el carrito (eliminar todos los productos del carrito de un usuario)
router.delete('/clear/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // Eliminar todos los productos del carrito para el usuario específico
        const deletedItems = await CartItem.destroy({ where: { userId } });

        if (deletedItems > 0) {
            res.status(200).json({ message: 'Carrito vacío exitosamente' });
        } else {
            res.status(404).json({ message: 'El carrito ya está vacío o no existe' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al vaciar el carrito', details: error.message });
    }
});

module.exports = router;
