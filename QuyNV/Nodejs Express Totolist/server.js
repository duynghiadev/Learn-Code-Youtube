const express = require('express')
const fs = require('fs')

const app = express()
const port = 8080

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

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
