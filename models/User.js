const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cart = require('./Cart'); // Importa el modelo Cart

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

// Asociación uno a uno (Un usuario tiene un carrito)
User.hasOne(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

module.exports = User;

