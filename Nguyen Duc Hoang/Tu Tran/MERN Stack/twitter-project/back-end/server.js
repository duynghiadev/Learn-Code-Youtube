// dotenv
import dotenv from 'dotenv'
// connect DB
import { connectDB } from './configs/db.js'
// Import Error Handler
import { errorHandler } from './middlewares/errorHandler.js'

import express, { json } from 'express'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import postRoute from './routes/postRoute.js'

dotenv.config()
connectDB()

const app = express()

// Cors
app.use(cors())

// Body parse
app.use(json())

// Mount the route
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/posts', postRoute)

// Unhandled Route (Route chưa tồn tại)
app.all('*', (req, res, next) => {
  const err = new Error('The route cannot be found')
  err.statusCode = 404
  next(err)
})
app.use(errorHandler)

const port = process.env.APP_PORT

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
