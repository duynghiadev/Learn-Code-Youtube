const express = require('express')
const route = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
// Ép kiểu dữ liệu từ JS sang JSON khi sử dụng thư viện body-parser
route.use(bodyParser.json())
// Cho phép express có thể sử dụng được các phương thức có sẵn của JS
route.use(bodyParser.urlencoded({ extended: true }))

// Định nghĩa route cho từng API
// API lấy tất cả thông tin
// Quy chuẩn của Restful API: /api/v1/users
route.get('/', (req, res) => {
  try {
    // Đọc file user.json
    const users = fs.readFileSync('./dev-data/users.json').toString()
    const datas = JSON.parse(users)
    //  Trả về dữ liệu cho phía client
    return res.status(200).json({
      status: 200,
      result: users.length,
      data: datas
    })
  } catch (error) {
    return res.status(500).json({
      // Trả về lỗi từ server
      status: 500,
      message: 'Lỗi hệ thống',
      data: error
    })
  }
})

// API lấy thông tin một bản ghi theo Id
route.get('/:id', (req, res) => {
  // Lấy id của đường dẫn này
  // const id = req.params.id // cách 1
  // cách 2
  const { id } = req.params
  console.log('>>> check id: ', id)
})

// API thêm mới dữ liệu
route.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  // Lấy dữ liệu thông qua phần body => để sử dụng được thì phải cài thư viện được cung cấp sẵn là body-parser
})

// API xoá thông tin 1 bản ghi theo ID
route.delete('/:id', (req, res) => {
  // Lấy ID
  const { id } = req.params
  console.log('id delete: ', id)
})

// Cập nhật thông tin 1 bản ghi theo ID
route.put('/:id', (req, res) => {
  // Lấy ID cần cập nhật
  const { id } = req.params

  // Lấy dữ liệu cần cập nhật
  const { UserName, Email, Password } = req.body

  console.log('id update: ', id)
  console.log('Data: ', UserName, Email, Password)
})

module.exports = route
