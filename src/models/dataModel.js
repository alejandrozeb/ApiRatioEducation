const {DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class DataModel extends Model {}

DataModel.init({
  Year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Ratio:{
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
    sequelize,
    modelName: 'Country' 
});

module.exports = DataModel;