/**
 * Phần này là ví dụ đã được giải thích trong file markdown
 */
function addUser() {
  const nameInput = document.getElementById('nameInput')
  const ageInput = document.getElementById('ageInput')

  const name = nameInput.value
  const age = parseInt(ageInput.value)

  if (name && !isNaN(age)) {
    const newUser = { name, age }
    users.push(newUser)

    // Update the UI
    displayUsers()

    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users))

    // Clear input fields
    nameInput.value = ''
    ageInput.value = ''
  } else {
    alert('Please enter valid name and age.')
  }
}

function displayUsers() {
  const userList = document.getElementById('users')
  userList.innerHTML = '' // Clear existing list

  users.forEach((user) => {
    const listItem = document.createElement('li')
    listItem.textContent = `${user.name} (${user.age} years old)`

    userList.appendChild(listItem)
  })
}

// Load existing users from localStorage
let users = JSON.parse(localStorage.getItem('users')) || []

// Display users on page load
displayUsers()
