// 1. Các câu lệnh selector
// chọn button add
let buttonAdd = document.querySelector('.btn_add_data')
let inputSelector = document.querySelector('.input_data')
let ulSelector = document.querySelector('.content_data_todos')
let todos = []

// 2. Các hàm khai báo
// 2.1 hàm này thực hiện lấy giá trị input
// 2.2 hàm này đưa giá trị input vào trong danh sách todosList
function handleAddTodo() {
  // 2.1 hàm này thực hiện lấy giá trị input
  let valueInput = inputSelector.value
  // 2.2 hàm này đưa giá trị input vào trong danh sách todosList
  // 2.2.1 Tạo ra object để thêm vào todo list
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
            <span class="edit">Edit</span>
        </li>`
  }
  // đưa resultHtml vào trong ul
  ulSelector.innerHTML = resultHtml
  // gán lại value input đến ''
  inputSelector.value = ''
}

// 3. Thêm các sự kiện
// 3.1 Sự kiện khi người dùng nhấn vào button add
buttonAdd.addEventListener('click', handleAddTodo)
