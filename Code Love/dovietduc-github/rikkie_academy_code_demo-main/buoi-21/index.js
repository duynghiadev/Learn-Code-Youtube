// r: read --- đọc dữ liệu
let todos = [
  { id: 1, name: 'Quét nhà' },
  { id: 2, name: 'Giặt quần áo' },
  { id: 3, name: 'Nấu cớm' }
]

function showTodos() {
  let result = '<ul>'
  for (let i = 0; i < todos.length; i++) {
    let objectValueI = todos[i]
    result = result + `<li>${objectValueI.name}</li>`
  }

  result = result + '</ul>'
  // 2. hiển thị kết quả ra trình duyệt
  document.write(result)
}

showTodos()

// crete----create
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
  document.write(`<h1>Phần Thêm Dữ Liệu</h1>`)
  showTodos()
}
addTodo()
// crete----create

// update --- update
function updateTodo(id, nameUpdate) {
  // 1. Tìm ra index của object cần update theo id
  // 2. Thực hiện thay đổi giá trị name cho object tìm được
  // 3. Hiển thị lại data theo giá trị update mới của object
  let indexUpdate = -1
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      indexUpdate = i
      break
    }
  }

  // chỉ update khi tìm ra index của object
  if (indexUpdate !== -1) {
    // 2. Thực hiện thay đổi giá trị name cho object tìm được
    todos[indexUpdate].name = nameUpdate
    document.write(`<h1>Phần Cập Nhật Dữ Liệu</h1>`)
    // 3. Hiển thị dữ liệu
    showTodos()
  }
}

updateTodo(1, 'Đi chơi hè')
// update -- update

// delete -- delete
function deleteTodo(id) {
  // 1. Tìm ra index của phần tử cần xóa trong mảng
  // 2. Tiến hành xóa bằng hàm splice (xóa theo index)
  // 3. Thực hiện hiển thị lại dữ liệu ra trình duyệt theo
  // dữ liệu mới của mảng, dữ liệu không bao gồm phần tử xóa

  // Quy trình code bước 1
  // 1. Tìm ra index của phần tử cần xóa trong mảng
  // điều kiện tìm ra index cần xóa là object với id = 1
  let indexFind
  for (let i = 0; i < todos.length; i++) {
    console.log('start for')
    if (todos[i].id === id) {
      indexFind = i
      // khi chạy thấy break thì không chạy vòng lặp tiếp theo
      break
    }
  }

  // 2. Tiến hành xóa bằng hàm splice (xóa theo index)
  todos.splice(indexFind, 1)
  // 3. Thực hiện hiển thị lại dữ liệu ra trình duyệt theo
  // bên ngoài for mở ul
  document.write(`<h1>Phần Xóa Dữ Liệu</h1>`)
  showTodos()
}

deleteTodo(2)

let arr = [{ name: 'duc' }, { name: 'dung' }]

// core js
let objCall = {
  findIndex: function (callback) {
    // callback =   function (item) {
    //     if(item.name === 'duc') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
      console.log(callback(1223))
    }
    return -1
  }
}

let index = objCall.findIndex(
  // value lafunction được khai báo
  // điều kiện trả vể tryue
  function (item) {
    return true
  }
)
console.log(index)

// 5 phút

function test() {
  return 1
}

console.log(test())
