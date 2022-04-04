module.exports = (sequelize, Sequelize) => {
  const CountryModel = sequelize.define('countries', {
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return CountryModel;      
};