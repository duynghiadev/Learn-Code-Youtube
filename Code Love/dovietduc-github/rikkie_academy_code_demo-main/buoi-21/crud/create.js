// 2. tạo dữ liệu todos
let todos = [
  { id: 1, name: 'Quét nhà' },

  { id: 2, name: 'Giặt quần áo' },

  { id: 3, name: 'Nấu cớm' }
]

// let objectPush = {id: 4, name: 'đi chơi với bạn'};
// todos.push(objectPush);

// 1. Tạo ra object push vào mảng
// 2. Hiển thị dữ liệu mới ra ngoài trình duyệt

function addTodo() {
  // tất cả câu lệnh trong đây thuộc về body hàm (thân hàm)
  // 1. Tạo ra object để thêm vào mảng công việc đã cho
  let nameTodo = prompt('Xin nhập tên công việc')
  let idUnique = todos.length + 1
  // tạo xong object push động
  let objectPush = {
    id: idUnique,
    name: nameTodo
  }

  // 2. Thêm objectPush vào trong mảng danh sách công việc
  todos.push(objectPush)

  // 3. Hiển thị dữ liệu được thêm mới ra màn hình
  let result = '<ul>'
  for (let i = 0; i < todos.length; i++) {
    result = result + `<li>${todos[i].name}</li>`
  }
  result = result + '</ul>'
  document.write(result)
}
// khi gọi hàm thì body hàm thực thi khối lệnh
addTodo()
