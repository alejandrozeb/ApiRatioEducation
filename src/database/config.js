const { Sequelize } = require('sequelize');
const {USER, PASSWORD, DBNAME, HOST, PORT, LOGGING} = require('./variablesEnv');
const dataModel = require('../models/dataModel');
const countryModel = require('../models/countryModel');

const sequelize = new Sequelize({
  username: USER,
  password: PASSWORD,
  database: DBNAME,
  host: HOST,
  dialect: 'postgres',
  port: parseInt(PORT,10), 
  logging: LOGGING
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataModel = dataModel(sequelize, Sequelize);
db.CountryModel = countryModel(sequelize, Sequelize);

db.CountryModel.hasMany(db.DataModel, {as: 'data'});
db.DataModel.belongsTo(db.CountryModel, {
  foreignKey: 'country_id',
  as: 'country'
});
module.exports = db;