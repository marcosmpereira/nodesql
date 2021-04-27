const Sequelize = require('sequelize');
const dbConfig = require('./../config/database');

const connection = new Sequelize(dbconfig);
module.exports = connection;