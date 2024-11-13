// models/Product.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de importar sequelize

class Product extends Model {}

Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING, // Corregido 'descrption' a 'description'
}, {
    sequelize,
    modelName: 'product', // Asegúrate de que el nombre aquí coincida con el nombre de tu tabla en la base de datos
});

module.exports = Product;


