import session from 'express-session'
import Sequelize from 'sequelize'
import passport from 'passport'

const configSession = (app) => {
  // initalize sequelize with session store
  const SequelizeStore = require('connect-session-sequelize')(session.Store)

  // create database, ensure 'sqlite3' in your package.json
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: false,
      define: {
        freezeTableName: true
      }
    }
  )

  const myStore = new SequelizeStore({
    db: sequelize
  })

  // configure express
  app.use(
    session({
      secret: 'keyboard cat',
      store: myStore,
      resave: false, // we support the touch method so per the express-session docs this should be set to false
      proxy: true, // if you do SSL outside of node.
      saveUninitialized: false
    })
  )
  // continue as normal
  myStore.sync()

  app.use(passport.authenticate('session'))

  // mã hóa: chuyển định dạng format
  passport.serializeUser(function (user, cb) {
    console.log('>>> check before: ', user)
    process.nextTick(function () {
      cb(null, user)
    })
  })

  // giải mã hóa: đọc thông tin format
  passport.deserializeUser(function (user, cb) {
    console.log('>>> check after: ', user)
    process.nextTick(function () {
      return cb(null, user)
    })
  })
}

export default configSession
