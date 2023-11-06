let users = []

async function getUser() {
  try {
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    users = data.data
    renderUser(users)
  } catch (error) {
    console.log(error)
  }
}

function renderUser() {
  let element = `<tr>
            <th>ID 🔑</th>
            <th align='left'>Name 🧑</th>
          </tr>`
  users.map((value) => {
    element += `<tr>
              <td>${value.id}</td>
              <td align='center'>${value.name}</td>
            </tr>`
  })
  document.getElementById('table').innerHTML = element
}

function searchUser() {
  let valueSearchInput = document.getElementById('search').value
  let userSearch = users.filter((value) => {
    return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
  })
  renderUser(userSearch)
}

function ascending() {
  let valueSelect = document.getElementById('sort').value
  users.sort((a, b) => {
    if (valueSelect === 'az') {
      return a.name.localeCompare(b.name)
    } else if (valueSelect === 'za') {
      return b.name.localeCompare(a.name)
    } else {
      return a.id - b.id
    }
  })
  renderUser()
}
