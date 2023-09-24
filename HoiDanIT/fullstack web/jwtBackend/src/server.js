import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 9999

// config view engine
configViewEngine(app)

// config body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
  console.log('>>> JWT Backend is running on the port = ' + PORT)
})
