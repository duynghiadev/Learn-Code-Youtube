'use strict'
const { Model, Sequelize } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Group_Role extends Model {
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
  Group_Role.init(
    {
      groupId: DataTypes.INTERGER,
      roleId: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Group_Role'
    }
  )
  return Group_Role
}
