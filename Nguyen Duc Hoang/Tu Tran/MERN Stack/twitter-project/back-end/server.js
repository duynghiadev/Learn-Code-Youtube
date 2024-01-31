// dotenv
import dotenv from 'dotenv'
// connect DB
import { connectDB } from './configs/db.js'

dotenv.config()
connectDB()

import express, { json } from 'express'
import cors from 'cors'

const app = express()

// Cors
app.use(cors())

// Body parse
app.use(json())

app.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      posts: [
        {
          content: 'Hello world!!!',
          date: '31/1/2024'
        }
      ]
    }
  })
})

const port = process.env.APP_PORT

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
