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

  const todos = JSON.parse(localStorage.getItem('todos')) || []
  const todosUpdate = [todo, ...todos]
  localStorage.setItem('todos', JSON.stringify(todosUpdate))

  document.querySelector('input').value = ''
}

showTodosFromLocal()
btn.addEventListener('click', handleAdd)

// thêm sự kiện delete cho cả 2
document.querySelector('ul').addEventListener('click', deleteData)

// cách 1: đồng bộ data ok vì nó nằm đồng bộ ở trên local + hiệu năng
// cách 2: chỉ thêm phần tử mới lên đầu danh sách -> hiệu năng ok hơn -> nhưng về đồng bộ khó maintain code

// -> đặt ra câu hỏi -> vậy có cách nào tốt cả về mặt đồng bộ data + hiệu năng
// cách nào tạo event cho cả 2 trường hợp

// document.querySelectorAll('.box').forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     console.log(event.target.textContent)
//   })
// })

document
  .querySelector('.container')
  .addEventListener('click', function (event) {
    const clicked = event.target
    if (clicked.classList.contains('box')) {
      console.log(event.target.textContent)
    }
  })
