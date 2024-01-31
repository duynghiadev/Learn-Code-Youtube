// 1. Hiển thị danh sách todo list
// chú ý: khi lần đầu tiên vào trang thì hiển thị danh sách công việc này
let todos = [
  { id: 1, name: 'Đi chợ' },
  { id: 2, name: 'Nấu cơm' },
  { id: 3, name: 'Giặt quần áo' }
]
let ulSelector = document.querySelector('#myUL')
let addButton = document.querySelector('.addBtn')
let inputSelector = document.querySelector('#myInput')

// dùng innnerHTML để thêm công việc vào Dom
// trước khi dùng innnerHTML phải nhớ cần 2 thứ:
// 1. Cái gì là html cần chèn vào DOM
// 2. Cần chèn vào DOm -> cần chèn vào ul với id myUL -> querySelector -> thay đổi obj

// 2 điểm
function showTodos() {
  // 1. tạo mã html chứa các công việc
  let liResult = ''
  for (let i = 0; i < todos.length; i++) {
    // Nối chuỗi tạo ra các li bọc todo name
    liResult =
      liResult +
      `<li>
            ${todos[i].name}
            <span data-id="${todos[i].id}" class="edit">Edit</span>
            <span data-id="${todos[i].id}" class="close">×</span>
        </li>`
  }

  // 2. chèn vào Dom
  // set lại value cho object
  ulSelector.innerHTML = liResult
}
// Gọi hàm hiển thị danh sách todo list
showTodos()
// Kết thúc list todos

// Thêm công việc
// 1. Bắt sự kiện khi người dùng nhấn vào nút add
// -> chúng ta phải query ra object add
// KHi người dùng click vào nút add chạy hàm này
function handleAddTodo() {
  // 1. Lấy value input
  let valueInput = inputSelector.value
  // 2. đưa input vào trong todos
  if (valueInput) {
    // sửa dữ liệu
    if (addButton.classList.contains('update')) {
      // 1. Lấy ra id update
      let idUpdate = addButton.getAttribute('data-id')
      // 2. Lấy ra index cần update
      let indexUpdate
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === +idUpdate) {
          indexUpdate = i
          break
        }
      }
      // 3. cập nhật value name tại index
      todos[indexUpdate].name = valueInput
      // 4. render data
      showTodos()
      // 5. reset to status add
      // 5.1 xóa class update
      addButton.classList.remove('update')
      // 5.2 Cập nhật text cho ui
      addButton.innerText = 'Add'
      // 5.3 Xóa data-id ở button add
      addButton.removeAttribute('data-id')
      // 5.4 reset value input
      inputSelector.value = ''
    }
    // Thêm dữ liệu
    else {
      let objNewAdd = {
        id: Date.now(),
        name: valueInput
      }
      // Thêm objNewAdd vào mảng
      todos.push(objNewAdd)
      // 3. render lại dữ liệu theo todos
      showTodos()
      // 4. reset value input
      inputSelector.value = ''
    }
  }
}
addButton.addEventListener('click', handleAddTodo)

// delete todos
function handleProcessTodo(event) {
  // lấy ra object element đang click
  let clicked = event.target

  // delete logic
  if (clicked.classList.contains('close')) {
    let idDelete = clicked.getAttribute('data-id')
    // 1. Tìm ra index cần xóa
    let indexFind
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === +idDelete) {
        indexFind = i
        break
      }
    }

    // 2. Tiến hành xóa trong mảng
    todos.splice(indexFind, 1)
    // 3. render lại dữ liệu
    showTodos()

    // 5. reset to status add
    // 5.1 xóa class update
    addButton.classList.remove('update')
    // 5.2 Cập nhật text cho ui
    addButton.innerText = 'Add'
    // 5.3 Xóa data-id ở button add
    addButton.removeAttribute('data-id')
    // 5.4 reset value input
    inputSelector.value = ''
  }
  // edit logic show data
  else if (clicked.classList.contains('edit')) {
    // 1. Lấy ra id edi
    let idEdit = clicked.getAttribute('data-id')
    // 2. Lấy ra index của object edit
    let indexEdit
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === +idEdit) {
        indexEdit = i
        break
      }
    }
    // 3. Lấy ra name của object
    let objectEdit = todos[indexEdit]
    // 4. set value name cho input
    inputSelector.value = objectEdit.name
    // 5. Thêm class để biêt click vào là edit
    // Để phân biệt click vào add hay update
    addButton.classList.add('update')
    // Để cho người dùng nhận diện hình ảnh
    addButton.innerText = 'Update'
    // Để biết cập nhật id nào
    addButton.setAttribute('data-id', idEdit)
  }
}

let ulParent = document.querySelector('#myUL')
ulParent.addEventListener('click', handleProcessTodo)
