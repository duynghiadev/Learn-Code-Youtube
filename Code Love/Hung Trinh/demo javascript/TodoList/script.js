const toDoList = []

function addToDoList() {
  let toDo = document.getElementById('toDo').value
  if (toDo) {
    toDoList.unshift({
      name: toDo,
      status: false
    })
    document.getElementById('toDo').value = ''
    renderToDoList()
  }
}

function renderToDoList() {
  let toDo = `<tr>
                <th>name</th>
                <th>status</th>
              </tr>`

  toDoList.map((value, index) => {
    toDo += `<tr>
              <td>${value.status ? '<s>' + value.name + '</s>' : value.name}</td>
              <td>
                <button onclick="changeStatus(${index})">
                  ${value.status ? 'backlog' : 'done'}
                </button>
              </td>
            </tr>`
  })
  document.getElementById('table').innerHTML = toDo
}

function changeStatus(index) {
  toDoList[index] = {
    name: toDoList[index].name,
    status: !toDoList[index].status
  }
  renderToDoList()
}
