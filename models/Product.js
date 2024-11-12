// models/Product.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de importar sequelize

class Product extends Model {}
Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, { sequelize, modelName: 'product' });

module.exports = Product;

