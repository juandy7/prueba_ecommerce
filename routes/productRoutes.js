// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Importamos el modelo de productos

// Ruta para obtener todos los productos
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products); // Devolvemos los productos en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Ruta para agregar un nuevo producto
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const newProduct = await Product.create({ name, description, price });
        res.status(201).json({ message: 'Producto creado', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
});

// Exporta el router
module.exports = router;
