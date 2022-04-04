module.exports = (sequelize, Sequelize) => {
  const DataModel = sequelize.define('data', {
    Year: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Ratio:{
      type: Sequelize.FLOAT,
      allowNull: true
    }
  });
  return DataModel;      
};