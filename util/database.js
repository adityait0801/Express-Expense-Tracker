const mysql = require('mysql2');
const Sequelize = require('sequelize')


const sequelizeInstance = new Sequelize('nodejs_sharpener','root','1MySQL*',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelizeInstance;
