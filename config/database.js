const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerceDB', 'admin', 'password', {
    host: 'database-1.crg8mcswkrzj.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 10000  // 10 segundos
    }
});


module.exports = sequelize;


