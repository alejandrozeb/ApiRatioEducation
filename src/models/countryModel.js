const {DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class CountryModel extends Model {}

CountryModel.init({
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'Country' 
});

module.exports = CountryModel;