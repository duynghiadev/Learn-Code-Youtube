const btn = document.querySelector('.btn-1')

function deleteData() {
  console.log('deleteData')
}

function showTodosFromLocal() {
  const todos = JSON.parse(localStorage.getItem('todos')) || []
  let htmlResult = ''
  todos.forEach(function (element) {
    htmlResult =
      htmlResult +
      `<li>
      ${element.name}
      <button class="delete">Delete</button>
    </li>`
  })
  document.querySelector('ul').innerHTML = htmlResult
  // Đưa sự kiện delete
  // thêm sự kiện delete dữ liệu
  document.querySelectorAll('.delete').forEach(function (element) {
    element.addEventListener('click', deleteData)
  })
}

function handleAdd() {
  const name = document.querySelector('input').value
  const todo = {
    id: crypto.randomUUID(),
    name: name
  }
  const todos = JSON.parse(localStorage.getItem('todos')) || []
  const todosUpdate = [...todos, todo]
  localStorage.setItem('todos', JSON.stringify(todosUpdate))

  // Hiển thị từ localStorage
  showTodosFromLocal()
  document.querySelector('input').value = ''
}

showTodosFromLocal()
btn.addEventListener('click', handleAdd)
