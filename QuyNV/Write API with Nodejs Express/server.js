const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// Ép kiểu dữ liệu từ JS sang JSON khi sử dụng thư viện body-parser
app.use(bodyParser.json())
// Cho phép express có thể sử dụng được các phương thức có sẵn của JS
app.use(bodyParser.urlencoded({ extended: true }))

const port = 8080 // Khai báo cổng

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
  // const id = req.params.id // cách 1
  // cách 2
  const { id } = req.params
  console.log('>>> check id: ', id)
})

// API thêm mới dữ liệu
app.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  // Lấy dữ liệu thông qua phần body => để sử dụng được thì phải cài thư viện được cung cấp sẵn là body-parser
})

// API xoá thông tin 1 bản ghi theo ID
app.delete('/:id', (req, res) => {
  // Lấy ID
  const { id } = req.params
  console.log('id delete: ', id)
})

// Cập nhật thông tin 1 bản ghi theo ID
app.put('/:id', (req, res) => {
  // Lấy ID cần cập nhật
  const { id } = req.params

  // Lấy dữ liệu cần cập nhật
  const { UserName, Email, Password } = req.body

  console.log('id update: ', id)
  console.log('Data: ', UserName, Email, Password)
})

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
