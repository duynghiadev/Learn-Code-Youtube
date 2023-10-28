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

let isCheckExitCity = checkOneElementExit(users, function (element) {
  return element.address.city === 'Ha Noi'
})

console.log(isCheckExitName)
console.log(isCheckExitEmail)
console.log(isCheckExitCity)

// Junior viết này là oke rồi -> nhưng không -> không ổn đâu -> some -> middle, senior
