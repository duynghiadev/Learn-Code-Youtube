const express = require('express')
const app = express()
require('dotenv').config()
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./Routes/User.route')

app.use(helmet())
app.use(morgan('common'))

app.use('/', userRoute)
app.use('/v1/', userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
