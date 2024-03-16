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

// Output
/**
 * [
 *  {
 *    name: 'nghia',
 *    address: 'Da Nang',
 *    age: 20
 *  }
 * ]
 */

const newUsers = users.filter((item) => {
  return !Object.values(item).some((i) => !i)
})

console.log('newUsers:', newUsers)
