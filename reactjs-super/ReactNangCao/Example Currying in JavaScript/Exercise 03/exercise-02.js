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

// we add another function on top of the previous
const filtering = (name) => (item) => {
  console.log('item:', item)
  console.log('-'.repeat(50))
  return item.name !== name
}


const filterByName = (list, name) => {
  return list.filter(filtering(name))
}

console.log('Result:', filterByName(list, 'John'))