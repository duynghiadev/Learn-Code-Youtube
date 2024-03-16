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

/**
 * users is an array containing objects representing user data.
 *
 * - The filter() method is used on the users array to create a new array, newUsers, containing only the elements that satisfy the condition specified in the callback function.
 *
 * - In the callback function:
 *
 * - Object.values(item) returns an array containing all the values of the current item object.
 *
 * - some((i) => !i) checks if there is at least one falsy value (!i) in the array of values. If any value is falsy (empty string, zero, etc.), some() returns true; otherwise, it returns false.
 *
 * - !Object.values(item).some((i) => !i) negates the result of some(). If there is no falsy value in the array of values (i.e., all values are truthy), !some() evaluates to true; otherwise, it evaluates to false.
 *
 * - So, the filter() method creates newUsers array containing only those user objects for which !Object.values(item).some((i) => !i) evaluates to true. In other words, it filters out the objects where at least one property has a falsy value.
 *
 * - Finally, newUsers array is logged to the console.
 *
 * - This code effectively filters out user objects that have at least one property with a falsy value, leaving only those with all properties having truthy values.
 */
