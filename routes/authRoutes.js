const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta de registro
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = await User.create({ username, password });
        res.status(201).json({ message: 'Usuario creado', user: newUser });
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar usuario' });
    }
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (user && user.password === password) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

// Ruta para obtener todos los usuarios
router.get('/allusers', async (req, res) => {
    try {
        const users = await User.findAll();  // Obtiene todos los usuarios
        res.status(200).json(users);         // Devuelve los usuarios en formato JSON
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Exporta el router
module.exports = router;
