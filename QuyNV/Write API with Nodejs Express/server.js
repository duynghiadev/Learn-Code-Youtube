const express = require('express')
const app = express()
const port = 8080

// get, post, put, delete
// API lấy tất cả thông tin
app.get('/', (req, res) => {
  return res.json({
    name: 'duynghiadev',
    age: 21,
    address: 'Đà Nẵng'
  })
})

// API lấy thông tin một bản ghi theo Id
app.get('/:id', (req, res) => {
  // Lấy id của đường dẫn này
})

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
