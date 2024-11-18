// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerceDB', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;