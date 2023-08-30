'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.hasMany(models.Weather, { sourceKey: 'id' });
    }
  };
  //object relational mapping
  Location.init({
    title: DataTypes.STRING,
    location_type: DataTypes.STRING,
    woeid: DataTypes.STRING,
    latt_long: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};