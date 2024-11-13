const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class CartItem extends Model {}

CartItem.init({
    quantity: DataTypes.INTEGER,
}, { sequelize, modelName: 'cartItem' });

module.exports = CartItem;

