const users = [
  {
    name: 'nghia',
    address: 'Da Nang',
    age: 20
  },
  {
    name: 'duynghiadev',
    address: 'Ha Noi',
    age: 0
  },
  {
    name: 'nghiaronaldo',
    address: '',
    age: 40
  }
]

const newUsers = users.filter((user) => {
  return user.name && user.age && user.address
})

console.log('newUsers:', newUsers)
