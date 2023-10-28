let users = [
  { name: 'duynghia1', email: 'duynghia1@gmail.com' },
  { name: 'duynghia2', email: 'duynghia2@gmail.com' },
  { name: 'duynghia3', email: 'duynghia3@gmail.com' }
]

// Tư duy học hàm some, every, forEach, map, reducer, filter, find, findIndex

// input --> array

// output --> some
// 1. Nó sẽ return true nếu 1 callback trả về true
// 2. Nếu nó chạy hết tất cả các phần tử trong mảng --> không có phần tử nào return true --> return false

// Hàm chung
function checkOneElementExit(userArray, keyName, value) {
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i][keyName] === value) {
      return true
    }
  }
  return false
}

// Call function
let isCheckExitName = checkOneElementExit(users, 'name', 'duynghia1')
let isCheckExitEmail = checkOneElementExit(
  users,
  'email',
  'duynghia1@gmail.com'
)
console.log(isCheckExitName)
console.log(isCheckExitEmail)

// Junior viết này là oke rồi -> nhưng không -> không ổn đâu -> some -> middle, senior
