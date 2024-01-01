const items = []

function addItem() {
  const nameInput = document.getElementById('name')
  const emailInput = document.getElementById('email')
  const name = nameInput.value.trim()
  const email = emailInput.value.trim()

  if (name === '' || email === '') {
    alert('Please enter a name and email')
    return
  }

  const item = { name, email }
  items.push(item)
  nameInput.value = ''
  emailInput.value = ''

  updateList()
}

function deleteItem(index) {
  items.splice(index, 1)
  updateList()
}

function editItem(index) {
  const item = items[index]
  const nameInput = document.getElementById('name')
  const emailInput = document.getElementById('email')

  nameInput.value = item.name
  emailInput.value = item.email
  items.splice(index, 1)
  updateList()
}

function createListItem(item, index) {
  const li = document.createElement('li')
  const nameSpan = document.createElement('span')
  const emailSpan = document.createElement('span')
  const dashSpan = document.createElement('span')
  const editButton = document.createElement('button')
  const deleteButton = document.createElement('button')

  nameSpan.textContent = item.name
  emailSpan.textContent = item.email
  dashSpan.textContent = ' - '
  editButton.textContent = 'Edit'
  deleteButton.textContent = 'Delete'
  editButton.addEventListener('click', () => editItem(index))
  deleteButton.addEventListener('click', () => deleteItem(index))

  li.append(nameSpan, dashSpan, emailSpan, editButton, deleteButton)
  return li
}

function updateList() {
  const list = document.getElementById('list')
  list.innerHTML = ''

  items.forEach((item, index) => {
    const li = createListItem(item, index)
    list.appendChild(li)
    console.log('item in function updateList:', item)
  })
}
