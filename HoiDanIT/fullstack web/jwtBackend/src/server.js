import express from 'express'
import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()
import bodyParser from 'body-parser'
import initApiRoutes from './routes/api'
import configCors from './config/cors'
// import connection from './config/connectDB'
import { createJWT, verifyToken } from './middleware/JWTAction'

const app = express()
const PORT = process.env.PORT || 9999

// configCors
configCors(app)

// config view engine
configViewEngine(app)

// config body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// test connection db
// connection()

// test JWT
createJWT()
let decodedData = verifyToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRHV5IG5naGlhIiwiYWRkcmVzcyI6IkRhIG5hbmciLCJpYXQiOjE2OTY4MTU4NDB9.2X0sY08KkIGLmXhyd6voewMMXadPWpVBjAmo9oQxmB4'
)
console.log(decodedData)

// init web routes
initWebRoutes(app)
initApiRoutes(app)

app.listen(PORT, () => {
  console.log('>>> JWT Backend is running on the port = ' + PORT)
})
