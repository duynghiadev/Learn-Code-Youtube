// r: read --- đọc dữ liệu
let todos = [
  { id: 1, name: 'Quét nhà' },

  { id: 2, name: 'Giặt quần áo' },

  { id: 3, name: 'Nấu cớm' }
]

// viết hàm đọc dữ liệu nghĩa là in ra tên công việc trên màn hình
// khai báo hàm
function showTodos() {
  // mọi sự thay đổi biến todos thuộc về global
  // vì todos là mảng nên tiến hành lặp qua các phần tử
  // 1. Nối chuỗi tạo ra dữ liệu
  let result = '<ul>'

  for (let i = 0; i < todos.length; i++) {
    let objectValueI = todos[i]
    result = result + `<li>${objectValueI.name}</li>`
  }

  result = result + '</ul>'

  // 2. hiển thị kết quả ra trình duyệt
  document.write(result)
}

// gọi hàm
showTodos()
