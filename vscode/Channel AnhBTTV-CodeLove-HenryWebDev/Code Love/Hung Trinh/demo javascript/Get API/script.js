let users = []
let currentPage = 1
let perPage = 2
let totalPage = 0
let perUser = []

async function getUser() {
  try {
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    users = data.data
    perUser = users.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)
    renderPageNumber()
    renderUser(users)
  } catch (error) {
    console.log(error)
  }
}

function handlePageNumber(num) {
  currentPage = num
  perUser = users.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)
  renderUser()
}

function renderPageNumber() {
  totalPage = users.length / perPage
  for (let i = 1; i <= totalPage; i++) {
    document.getElementById(
      'pagination'
    ).innerHTML += `<li onclick="handlePageNumber(${i})">${i}</li>`
  }
}

function renderUser() {
  let element = `<tr>
            <th>ID 🔑</th>
            <th align='left'>Name 🧑</th>
          </tr>`
  perUser.map((value) => {
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
