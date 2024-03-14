const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Hello, World!')
})

server.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`server is listening : ${port}`)
})
