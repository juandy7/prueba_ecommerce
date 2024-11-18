// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerceDB', 'admin', 'password', {
    host: ' ecommercedb.cggv94uga47a.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

module.exports = sequelize;

