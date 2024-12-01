const http = require('http')

const compute = () => {
  console.log('Performing CPU-intensive...')
  compute()
}

http
  .createServer((req, res) => {
    res.end('Hello Tips JavaScript')
  })
  .listen(5000)

compute()
