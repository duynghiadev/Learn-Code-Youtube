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
  return Object.values(user).every((value) => Boolean(value))
})

console.log('newUsers:', newUsers)

/**
 * Explanation:
 *
 * - We use the filter() method to iterate over each user object in the users array
 *
 * - For each user object, we use Object.values() to get an array of its property values
 *
 * - Then, we use the every() method to check if all values are truthy. If any value is falsy (e.g., empty string, zero, etc.), the every() method returns false, causing the user object to be excluded from the newUsers array
 *
 * - Finally, we log the newUsers array containing only the user objects with all properties having truthy values.
 */
