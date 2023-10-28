let users = [
  {
    name: 'duynghia1',
    mail: 'duynghia1@gmail.com',
    address: {
      city: 'Ha Noi'
    }
  },
  {
    name: 'duynghia2',
    mail: 'duynghia2@gmail.com',
    address: {
      city: 'Ho Chi Minh'
    }
  },
  {
    name: 'duynghia3',
    mail: 'duynghia3@gmail.com',
    address: {
      city: 'Da Nang'
    }
  }
]

// solid
// s -> S - Single-responsiblity Principle

// gọi hàm --> sum
let isCheckExitName = checkOneElementExit(users, function (element) {
  return element.name === 'duynghia10'
})

let isCheckExitEmail = checkOneElementExit(users, function (element) {
  return element.mail === 'duynghia1@gmail.com'
})

function checkCity(element) {
  return element.address.city === 'Ha Noi'
}

let isCheckExitCity = checkOneElementExit(users, checkCity)

console.log(isCheckExitName)
console.log(isCheckExitEmail)
console.log(isCheckExitCity)

// Junior viết này là oke rồi -> nhưng không -> không ổn đâu -> some -> middle, senior
// Tại sao sử dụng array.some method
Array.prototype.someCustom = function (callback) {
  console.log('>>> this is callback', callback)
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true
    }
  }
  return false
}

console.log('>>> users.someCustom', users.someCustom)

console.log(
  '>>> element',
  users.someCustom(function (element) {
    return element.address.city === 'Ha Noi'
  })
)

// nó sẽ return cho callback chạy trong core
// some, every, map, filter, reduce, find, findIndex
