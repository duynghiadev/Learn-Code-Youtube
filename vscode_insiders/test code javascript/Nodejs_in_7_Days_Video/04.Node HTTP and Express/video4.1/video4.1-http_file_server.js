const fs = require('fs')
const http = require('http')
const path = require('path')
const port = 8080

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'image/png')

  fs.readFile(path.resolve(__dirname, 'helloworld.png'), (err, data) => {
    res.end(data)
  })
})

server.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`server is listening : ${port}`)
})
