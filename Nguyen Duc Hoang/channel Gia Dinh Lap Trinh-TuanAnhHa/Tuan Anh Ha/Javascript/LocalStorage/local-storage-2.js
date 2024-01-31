/**
 * Trong ví dụ này, chúng ta sẽ lưu trữ một danh sách các công việc (todos) vào localStorage và sử dụng các phương thức mảng để thêm, xóa và hiển thị các công việc:
 */

function getTodos() {
  return JSON.parse(localStorage.getItem('todos')) || []
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function displayTodos() {
  const todoList = document.getElementById('todoList')
  todoList.innerHTML = ''

  const todos = getTodos()

  todos.forEach((todo, index) => {
    console.log('todo forEach:', todo)
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = false
    checkbox.onclick = () => {
      console.log('index checkbox:', index)
      return toggleCompleted(index)
    }

    if (todos[index].completed) {
      li.style.textDecoration = 'line-through'
      checkbox.checked = true
    }

    const span = document.createElement('span')
    span.textContent = todo.text

    const editButton = document.createElement('button')
    editButton.textContent = 'Sửa'
    editButton.onclick = () => {
      console.log('index edit:', index)
      return editTodo(index)
    }

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Xóa'
    deleteButton.onclick = () => {
      console.log('index delete:', index)
      return deleteTodo(index)
    }

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(editButton)
    li.appendChild(deleteButton)

    todoList.appendChild(li)
  })
}

function addTodo() {
  const newTodoInput = document.getElementById('newTodo')
  const newTodo = newTodoInput.value.trim()

  if (newTodo !== '') {
    const todos = getTodos()
    todos.push({ text: newTodo, completed: false })
    saveTodos(todos)
    displayTodos()
    newTodoInput.value = ''
  }
}

function editTodo(index) {
  const todos = getTodos()
  let updatedTodo = prompt('Sửa công việc:', todos[index].text)

  while (updatedTodo !== null && updatedTodo.trim() === '') {
    // Người dùng đã bấm OK mà không nhập gì hoặc chỉ nhập khoảng trắng
    alert('Vui lòng nhập một nội dung hợp lệ.')
    updatedTodo = prompt('Sửa công việc:', todos[index].text)
  }

  if (updatedTodo !== null) {
    todos[index].text = updatedTodo.trim()
    saveTodos(todos)
    displayTodos()
  }
}

function deleteTodo(index) {
  const todos = getTodos()
  todos.splice(index, 1)
  saveTodos(todos)
  displayTodos()
}

function toggleCompleted(index) {
  const todos = getTodos()
  todos[index].completed = !todos[index].completed
  saveTodos(todos)
  displayTodos()
}

displayTodos()
