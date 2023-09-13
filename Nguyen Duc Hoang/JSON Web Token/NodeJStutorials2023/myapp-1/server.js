import express from 'express'
import * as dotenv from 'dotenv'
import { usersRouter, studentsRouter } from './routes/index.js'

// send test requests => use Postman
dotenv.config() // must have
const app = express()

// middleware
// Allows reading the body tag of the request
app.use(express.json())

const port = process.env.PORT ?? 3000

// routers
// this is middleware
app.use('/users', usersRouter)
app.use('/students', studentsRouter)

app.get('/', (req, res) => {
  res.send('response from root router')
})

app.listen(port, async () => {
  console.log(`listening on port http://localhost:${port}`)
})

/*
console.log('Hello, this is NodeJS tutorial 2023')

import { sum, multiply, substract } from './calculations.js'

console.log(`3 plus 2 is: ${sum(3, 2)}`)
console.log(`3 * 2 is: ${multiply(3, 2)}`)
console.log(`3 - 2 is: ${substract(3, 2)}`)
// i file = 1 module
*/
