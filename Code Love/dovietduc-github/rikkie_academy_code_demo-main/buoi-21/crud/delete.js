// Xóa dữ liệu
let todos = [
  { id: 1, name: 'Quét nhà' },

  { id: 2, name: 'Giặt quần áo' },

  { id: 3, name: 'Nấu cớm' }
]
// yêu cầu: Xóa object có id = 1;

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
  let result = '<ul>'

  for (let i = 0; i < todos.length; i++) {
    result = result + `<li>${todos[i].name}</li>`
  }
  // bên ngoài for đúng ul
  result = result + '</ul>'
  document.write(result)
}

deleteTodo(2)

// let arr = [
//     1,
//     2,
//     3
// ];
// // xóa ở value = 1
// arr.splice(0, 1);
// console.log(arr);
