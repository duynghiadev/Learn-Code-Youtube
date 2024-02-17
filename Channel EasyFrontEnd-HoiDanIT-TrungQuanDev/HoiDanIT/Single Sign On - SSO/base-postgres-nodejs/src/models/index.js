'use strict'
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
// const config = require(__dirname + '/../config/config.json')[env];
const db = {}

let sequelize
const customizeConfig = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false,
  dialectOptions:
    process.env.DB_SSL === 'true'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      : {},
  timezone: '+07:00',
  define: {
    freezeTableName: true
  }
}

sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  customizeConfig
)

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.Sequelize = Sequelize
db.sequelize = sequelize
module.exports = db
