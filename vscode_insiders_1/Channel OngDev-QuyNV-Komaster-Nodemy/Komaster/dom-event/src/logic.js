const poll = document.querySelector('.poll-list')

function changeTodoStatus(input, p) {
  input.addEventListener('change', function (event) {
    const checked = event.target.checked

    if (checked) {
      p.style.textDecoration = 'line-through'
    } else {
      p.style.textDecoration = ''
    }
  })
}

function deleteTodo(button) {
  button.addEventListener('click', function () {
    button.parentElement.remove()
  })
}

function createTodo(value) {
  const item = document.createElement('div')
  const input = document.createElement('input')
  const itemContent = document.createElement('div')
  const p = document.createElement('p')
  const button = document.createElement('button')

  item.className = 'poll-item'
  input.type = 'checkbox'
  input.className = 'input-checkbox'
  itemContent.className = 'poll-content'
  p.innerHTML = value
  button.innerHTML = 'DELETE'
  button.className = 'btn btn-sm btn-danger rounded'

  changeTodoStatus(input, p)
  deleteTodo(button)

  itemContent.appendChild(p)
  item.appendChild(input)
  item.appendChild(itemContent)
  item.appendChild(button)

  poll.appendChild(item)
}

exports.createTodo = createTodo
