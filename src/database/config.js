const { Sequelize, Model, DataTypes } = require('sequelize');
const {USER, PASSWORD, DBNAME, HOST, PORT} = require('./variablesEnv');

const sequelize = new Sequelize({
  username: USER,
  password: PASSWORD,
  database: DBNAME,
  host: HOST,
  dialect: 'postgres',
  port: parseInt(PORT,10), 
});

module.exports = sequelize;