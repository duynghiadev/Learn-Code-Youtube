import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config() // must have
const app = express()

const port = process.env.PORT ?? 3000

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
