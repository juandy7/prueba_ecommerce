// index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log('Error al sincronizar la DB:', error));

// Rutas de autenticación y tienda
app.use('/auth', authRoutes);


app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
