// config/database.js
const { Sequelize } = require('sequelize');

// Usa el endpoint de RDS como host
const sequelize = new Sequelize('database1', 'admin', 'password', {
    host: 'database-1.cggv94uga47a.us-east-1.rds.amazonaws.com', // Reemplázalo con tu endpoint de RDS
    dialect: 'mysql'
});

module.exports = sequelize;

