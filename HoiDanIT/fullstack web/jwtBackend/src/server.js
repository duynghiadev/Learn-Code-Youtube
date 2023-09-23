import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9999

// config view engine
configViewEngine(app)

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
  console.log('>>> JWT Backend is running on the port = ' + PORT)
})
