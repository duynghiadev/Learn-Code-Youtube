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

  // Hiển thị dữ liệu mới
  const liHtmlNew = document.createElement('li')
  liHtmlNew.innerHTML = `${name}
    <button class="delete">Delete</button>
    `
  document.querySelector('ul').prepend(liHtmlNew)

  // thêm sự kiện delete
  liHtmlNew.querySelector('.delete').addEventListener('click', deleteData)

  const todos = JSON.parse(localStorage.getItem('todos')) || []
  const todosUpdate = [todo, ...todos]
  localStorage.setItem('todos', JSON.stringify(todosUpdate))

  document.querySelector('input').value = ''
}

showTodosFromLocal()
btn.addEventListener('click', handleAdd)
