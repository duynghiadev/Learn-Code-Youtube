// 1. update ở đâu?
// 2. update cái gì?
let todos = [
  { id: 1, name: 'Quét nhà' },

  { id: 2, name: 'Giặt quần áo' },

  { id: 3, name: 'Nấu cớm' }
]

// yêu cầu: update ở id = 1 (tìm object với id = 1)
// update name = "đi chơi"

function updateTodo(id, nameUpdate) {
  // 1. Tìm ra index của object cần update theo id
  // 2. Thực hiện thay đổi giá trị name cho object tìm được
  // 3. Hiển thị lại data theo giá trị update mới của object
  let indexUpdate = -1
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      indexUpdate = i
      break
    }
  }

  // chỉ update khi tìm ra index của object
  let result = '<ul>'
  // covert array -> join
  let resultLoop = []
  if (indexUpdate !== -1) {
    // 2. Thực hiện thay đổi giá trị name cho object tìm được
    todos[indexUpdate].name = nameUpdate
    // 3. Hiển thị lại data theo giá trị update mới của object
    for (let i = 0; i < todos.length; i++) {
      resultLoop.push(`<li>${todos[i].name}</li>`)
    }
    // join to string
    resultLoop = resultLoop.join('')
    result = result + resultLoop + '</ul>'
  }

  document.write(result)
}

updateTodo(1, 'Đi chơi hè')
