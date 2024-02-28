const http = require('http')

const compute = () => {
  console.log('Performing CPU-intensive...process.nextTick')
  process.nextTick(compute)
}

http
  .createServer((req, res) => {
    res.end('Hello Tips JavaScript')
  })
  .listen(5000)

compute()
