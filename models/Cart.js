const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const CartItem = require('./CartItem'); // Importa el modelo CartItem

class Cart extends Model {}

Cart.init({}, { sequelize, modelName: 'cart' });

// Asociación uno a muchos (Un carrito tiene múltiples CartItems)
Cart.hasMany(CartItem, { foreignKey: 'cartId' });
CartItem.belongsTo(Cart, { foreignKey: 'cartId' });
Cart.hasMany(Product, {
    foreignKey: 'cartId', 
  });

module.exports = Cart;

