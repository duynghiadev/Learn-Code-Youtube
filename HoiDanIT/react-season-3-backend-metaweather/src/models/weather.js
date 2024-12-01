'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Weather.belongsTo(models.Location, {foreignKey: 'location_id'})
    }
  };
  //object relational mapping
  Weather.init({
    applicable_date: DataTypes.DATE,
    weather_state_name: DataTypes.STRING,
    max_temp: DataTypes.STRING,
    min_temp: DataTypes.STRING,
    wind_direction_compass: DataTypes.STRING,
    wind_speed: DataTypes.STRING,
    location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Weather',
  });
  return Weather;
};