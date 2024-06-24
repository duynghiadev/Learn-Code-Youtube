const list = [
  {
    id: 1,
    name: 'Steve',
    email: 'steve@example.com'
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com'
  },
  {
    id: 3,
    name: 'Pamela',
    email: 'pam@example.com'
  },
  {
    id: 4,
    name: 'Liz',
    email: 'liz@example.com'
  }
]

const noJohn = list.filter(item => item.name !== 'John')
console.log('Result of noJohn:', noJohn)