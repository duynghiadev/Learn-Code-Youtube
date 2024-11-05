const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const morganDebug = require('morgan-debug')
const helmet = require('helmet')

const indexRouter = require('./routes/index')

const data = require('./data')

const app = express()

app.use(helmet())
app.use(morganDebug('myapp:server', 'dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.locals.data = data

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  next(createError(500, err))
})

module.exports = app
