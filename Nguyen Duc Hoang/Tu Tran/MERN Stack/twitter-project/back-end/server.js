// dotenv
import dotenv from 'dotenv'
// connect DB
import { connectDB } from './configs/db.js'

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

const port = process.env.APP_PORT

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
