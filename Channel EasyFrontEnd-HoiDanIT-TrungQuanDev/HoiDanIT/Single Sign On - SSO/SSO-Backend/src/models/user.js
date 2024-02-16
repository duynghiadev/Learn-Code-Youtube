'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Group)
      User.belongsToMany(models.Project, { through: 'Project_User' })
    }
  }
  //object relational mapping
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: { type: DataTypes.STRING, defaultValue: 'LOCAL' },
      username: DataTypes.STRING,
      address: DataTypes.STRING,
      sex: DataTypes.STRING,
      phone: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
      refreshToken: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
