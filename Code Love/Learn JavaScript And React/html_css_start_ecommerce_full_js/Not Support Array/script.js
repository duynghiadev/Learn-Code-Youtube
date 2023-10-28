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

function checkOneElementTrue(userArray) {
  for (let i = 0; i < userArray.length; i++) {
    console.log(userArray[i])
    if (userArray[i].name === 'duynghia10') {
      return true
    }
  }
  return false
}

// Call function
let isCheckExitName = checkOneElementTrue(users)
console.log(isCheckExitName)
