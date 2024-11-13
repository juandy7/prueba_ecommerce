const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const CartItem = require('./CartItem'); // Importa el modelo Cart

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

// Asociación: un usuario tiene muchos CartItems
User.hasMany(CartItem, {
    foreignKey: 'userId',
    as: 'cartItems',
  });
  CartItem.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

module.exports = User;

