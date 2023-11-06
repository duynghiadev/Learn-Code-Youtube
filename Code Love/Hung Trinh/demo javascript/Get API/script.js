let users = []

async function getUser() {
  try {
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    users = data.data
    renderUser()
  } catch (error) {
    console.log(error)
  }
}

function renderUser() {
  let element = `<tr>
            <th>ID</th>
            <th align='left'>Name</th>
          </tr>`
  users.map((value) => {
    element += `<tr>
              <td>${value.id}</td>
              <td align='center'>${value.name}</td>
            </tr>`
  })
  document.getElementById('table').innerHTML = element
}
