'use strict'
const { Model, Sequelize } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  // object relational mapping
  Project.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.STRING,
      customerId: DataTypes.INTERGER
    },
    {
      sequelize,
      modelName: 'Project'
    }
  )
  return Project
}
