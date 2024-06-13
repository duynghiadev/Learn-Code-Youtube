// 1. Các câu lệnh selector
// chọn button add
let buttonAdd = document.querySelector('.btn_add_data')
let inputSelector = document.querySelector('.input_data')
let ulSelector = document.querySelector('.content_data_todos')
let todos = []

// 2. Các hàm khai báo
// 2.1 hàm này thực hiện lấy giá trị input
// 2.2 hàm này đưa giá trị input vào trong danh sách todosList
function handleAddTodo(event) {
  // 2.1 hàm này thực hiện lấy giá trị input
  let valueInput = inputSelector.value
  // 2.2 hàm này đưa giá trị input vào trong danh sách todosList
  // 2.2.1 Tạo ra object để thêm vào todo list
  if (event.target.classList.contains('update')) {
    // 1. Lấy idUpdate
    let idUpdate = event.target.getAttribute('data-id')
    // 2. Lấy index object update
    let indexUpdate
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === +idUpdate) {
        indexUpdate = i
        break
      }
    }
    // 3. cập nhật name cho object
    todos[indexUpdate].name = valueInput
    // 4. render lại dư liệu theo name mới
    let resultHtml = ''
    for (let i = 0; i < todos.length; i++) {
      resultHtml =
        resultHtml +
        `<li>
                ${todos[i].name}
                <span class="delete">Delete</span>
                <span data-id=${todos[i].id} class="edit">Edit</span>
            </li>`
    }
    // đưa resultHtml vào trong ul
    ulSelector.innerHTML = resultHtml

    // reset nút add về trạng thái add
    buttonAdd.innerText = 'Add'
    buttonAdd.classList.remove('update')
    buttonAdd.removeAttribute('data-id')
    // reset value input to ''
    inputSelector.value = ''
  } else {
    let objAddToTodos = {
      id: Date.now(),
      name: valueInput
    }
    // 2.2.2 Thêm object vào array todos
    todos.push(objAddToTodos)
    // 2.3 Hiển thị danh sách todos từ mảng
    let resultHtml = ''
    for (let i = 0; i < todos.length; i++) {
      resultHtml =
        resultHtml +
        `<li>
                ${todos[i].name}
                <span class="delete">Delete</span>
                <span data-id=${todos[i].id} class="edit">Edit</span>
            </li>`
    }
    // đưa resultHtml vào trong ul
    ulSelector.innerHTML = resultHtml
    // gán lại value input đến ''
    inputSelector.value = ''
  }
}

// hàm để hiển thị dữ liệu cần update ra input
function handleUpdateTodo(event) {
  let clicked = event.target
  // Nếu nhấn vào nút edit mới tiến hành xử lí
  if (clicked.classList.contains('edit')) {
    // Phải lấy name của object đang edit đưa lên ô input
    // 1. Lấy ra id update
    let idUpdate = clicked.getAttribute('data-id')
    // 2. Tìm ra index của object edit
    let indexEdit
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === +idUpdate) {
        indexEdit = i
        break
      }
    }
    let nameUpdate = todos[indexEdit].name
    // 3. set lại value cho input
    inputSelector.value = nameUpdate
    // 4. Đặt lại trạng thái update cho button add
    // 4.1 Cập nhật text thành update
    buttonAdd.innerText = 'Update'
    // 4.2 Thêm class để phân biệt người dùng click add hay update
    buttonAdd.classList.add('update')
    // 4.3 Thêm data-id = idUpdate để sau này nhấn nút update biết update cho object nào?
    buttonAdd.setAttribute('data-id', idUpdate)
  }
}

// 3. Thêm các sự kiện
// 3.1 Sự kiện khi người dùng nhấn vào button add
buttonAdd.addEventListener('click', handleAddTodo)
ulSelector.addEventListener('click', handleUpdateTodo)
