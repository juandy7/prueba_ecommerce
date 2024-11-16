const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes'); // Rutas de autenticación
const productRoutes = require('./routes/productRoutes'); // Rutas de productos
const path = require('path'); // Para servir archivos estáticos si es necesario
const cartRoutes = require('./routes/cartRoute');

const app = express();
app.use(express.json());
app.use(cors());

// Configurar EJS como motor de plantillas (si usas EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usamos las rutas
app.use('/auth', authRoutes); // Rutas de autenticación que se conecta con authRoutes
app.use('/products', productRoutes); // Rutas de productos que se conecta con productRoutes
app.use('/cart', cartRoutes); // Rutas de productos que se conecta con productRoutes

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log('Error al sincronizar la DB:', error));

app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
