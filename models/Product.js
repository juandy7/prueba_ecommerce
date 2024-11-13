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
    tableName: 'products', // Asegura que Sequelize use la tabla "products"
});

// Asociación uno a muchos (Un producto puede estar en varios CartItems)
Product.hasMany(CartItem, { foreignKey: 'productId' });
CartItem.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Product;



