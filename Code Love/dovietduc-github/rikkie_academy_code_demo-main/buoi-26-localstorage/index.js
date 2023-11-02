// 1. nơi lưu trữ biến
let button = document.querySelector('.btn')
let boxSelector = document.querySelector('.box')
let defaultClassBox = 'box-demo'

// 2. nơi khai báo hàm khi click button
function handleChangeColorBox() {
  // 1. thay đổi màu sắc box đến màu đỏ khi click button
  boxSelector.classList.add('box-change')
  // 2. Lưu lại mầu đấy để khi load lại trình duyệt lấy ra hiển thị
  // key và value phải là string
  localStorage.setItem('classColor', 'box-change')
}

// Hàm thực thi khi reload page hay vào trang lần đầu (đều gọi là reload page)
function initColorBox() {
  let classColorValue = localStorage.getItem('classColor')
  // 1. Chưa click vào button thì value lấy ra là null
  if (classColorValue === null) {
    boxSelector.classList.add('box-demo')
  }
  // 2. Sau khi click button thì value là box-change
  else {
    boxSelector.classList.add(classColorValue)
  }
}

// 3. Bắt sự kiện để gọi hàm
// gọi hàm khởi tạo mầu mặc định
initColorBox()
// Thêm sự kiện click button thay đổi mầu box
button.addEventListener('click', handleChangeColorBox)
// cách không bị mất:
// 1. Khi người dùng click vào button thì bạn cần lưu mầu đó lại và
// khi trang reload mầu đó không bị mất

// 1. Khi người dùng lần đầu vào trang  thì hiển thị mẫu mặc định
// chưa click button nên chưa có dũ liệu trong localStorage
// Nghĩa là thêm box-demo cho box

// 2. Khi người dùng click button thì thay đổi màu sắc box đến màu đỏ
// Nghĩa là add class box-change vào box
// Lưu trữ class box-change vào localStorage

// 3. Bạn phải giữ được mầu đỏ khi load lại trang kể từ lần click vào button thay đổi mầu

// 4. Lưu trữ dữ liệu phức tạp (array, object);
let arrData = [{ name: 'quét nhà' }, { name: 'giặt quần áo' }]

// lưu trữ vào trong localStorage
// 1. convert array, object to string
localStorage.setItem('todos', JSON.stringify(arrData))

// Lấy ra từ localStorage
// convert string to array, objet
let todos = JSON.parse(localStorage.getItem('todos'))
console.log(todos)
console.log(typeof todos)

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i])
}
