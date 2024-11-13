const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const CartItem = require('./CartItem'); // Importa el modelo CartItem

class Product extends Model {}

Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'product',
    tableName: 'products', 
});

// Asociación: un producto tiene muchos CartItems
Product.hasMany(CartItem, {
    foreignKey: 'productId',
    as: 'cartItems',
  });
  CartItem.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product',
  });

module.exports = Product;



