// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerceDB', 'admin', 'password', {
    host: 'ecommerce.crg8mcswkrzj.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

module.exports = sequelize;
