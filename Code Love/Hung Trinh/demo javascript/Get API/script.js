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

function renderUser(array) {
  let element = `<tr>
            <th>ID</th>
            <th align='left'>Name</th>
          </tr>`
  array.map((value) => {
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
