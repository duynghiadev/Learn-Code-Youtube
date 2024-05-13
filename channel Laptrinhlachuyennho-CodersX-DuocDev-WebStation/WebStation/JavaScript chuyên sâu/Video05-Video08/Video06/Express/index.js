const express = require('express')

const app = express()

console.log('typeof app:', typeof app)

app.get('/', function (error, response) {
  response.send('It is working now')
})

app.get('/hoccoban', function (error, response) {
  response.send('This is hoccoban router')
})

const port = 3000

app.listen(port, function () {
  console.log('app running...')
})
