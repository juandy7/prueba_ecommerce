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

// Exporta el router
module.exports = router;
