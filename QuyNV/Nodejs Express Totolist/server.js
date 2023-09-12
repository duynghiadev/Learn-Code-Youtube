const express = require('express')
const fs = require('fs')
const app = express()
const port = 8080

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// API lấy thông tin tất cả công việc
app.get('/api/v1/todos', (req, res) => {
  try {
    // Đọc file todos.json
    const todos = fs.readFileSync('./dev-data/todos.json').toString()
    const datas = JSON.parse(todos)
    if (datas.length > 0) {
      return res.status(200).json({
        status: 200,
        result: datas.length,
        data: datas
      })
    } else {
      return res.status(200).json({
        status: 200,
        data: []
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Lỗi hệ thống',
      error: error
    })
  }
})

// API lấy thông tin một công việc theo id
app.get('/api/v1/todos/:id', (req, res) => {
  // Lấy id từ client gửi lên
  const id = req.params.id
  try {
    // Đọc file todos.json
    const todos = fs.readFileSync('./dev-data/todos.json').toString()
    // Ép kiểu từ JSON sang JS
    const datas = JSON.parse(todos)
    // Tìm kiếm job theo id
    const data = datas.find((job) => job.id === +id)
    // Kiểm tra job có tồn tại trong DB hay không ?
    if (data) {
      return res.status(200).json({
        status: 200,
        data: data
      })
    } else {
      return res.status(404).json({
        status: 404,
        message: 'Công việc không tồn tại trong hệ thống'
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Lỗi hệ thống',
      error: error
    })
  }
})

// API xoá thông tin một công việc theo id
app.delete('/api/v1/todos/:id', (req, res) => {
  // Lấy id từ client gửi lên
  const id = req.params.id
  try {
    // Đọc file todos.json
    const todos = JSON.parse(fs.readFileSync('./dev-data/todos.json'))
    // Kiểm tra, lọc thông tin những job khác với id được gửi lên
    const newTodo = todos.filter((todo) => todo.id != id)
    // Tiến hành ghi đè file
    fs.writeFileSync('./dev-data/todos.json', JSON.stringify(newTodo))
    return res.status(200).json({
      status: 200,
      message: 'Xoá thành công'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Lỗi hệ thống',
      error: error
    })
  }
})

// Kiểm tra dữ liệu không được để trống
const checkIsEmpty = (filed) => {
  if (filed === null || filed === undefined || filed === '') {
    return true
  } else {
    return false
  }
}

// Middleware kiểm tra dữ liệu đầu vào
const validateData = (req, res, next) => {
  const { title } = req.body
  if (checkIsEmpty(title)) {
    return res.status(400).json({
      status: 400,
      message: 'Tên công việc không được phép để trống'
    })
  }
  // Cho phép đi đến hàm tiếp theo
  next()
}

// API thêm mới công việc
app.post('/api/v1/todos', validateData, (req, res) => {
  const id = Math.ceil(Math.random() * 100000)
  // Lấy dữ liệu từ người dùng
  const { UserId, title } = req.body
  // Tạo ra 1 newTodo
  const newTodo = {
    userId: UserId,
    id: 10,
    title: title,
    completed: false
  }
  try {
    const datas = JSON.parse(fs.readFileSync('./dev-data/todos.json'))
    // Push vào mảng
    datas.push(newTodo)
    // writeFile
    fs.writeFileSync('./dev-data/todos.json', JSON.stringify(datas))
    // Hiển thị cho người dùng
    return res.status(201).json({
      status: 201,
      message: 'Thêm thành công'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Lỗi hệ thống',
      error: error
    })
  }
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
