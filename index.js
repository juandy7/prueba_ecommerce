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

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz para servir login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Sirve el archivo login.html
});

// Usamos las rutas
app.use('/auth', authRoutes); // Rutas de autenticación que se conecta con authRoutes
app.use('/products', productRoutes); // Rutas de productos que se conecta con productRoutes
app.use('/cart', cartRoutes); // Rutas de productos que se conecta con cartRoutes

// Conectar a la base de datos
sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log('Error al sincronizar la DB:', error));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
