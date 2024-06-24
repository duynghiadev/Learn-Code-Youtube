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

// This is using the old fashion function syntax 👎

function filterByName(list, name) {
  return list.filter(function(nameToFilter) {
    // nameToFilter is declared at this point
    return function(item) {
      // item is declared here
      return item.name !== nameToFilter
    }
  }(name))
}

console.log('Result:', filterByName(list, 'John'))