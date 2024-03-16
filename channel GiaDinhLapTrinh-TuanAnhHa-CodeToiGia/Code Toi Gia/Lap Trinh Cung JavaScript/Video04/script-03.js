const array = [1, 2, 3]
const repetitions = 2

// Create a new array with the desired number of repetitions
const newArray = Array.from({ length: repetitions }, () => array).reduce((acc, curr) => {
  console.log('curr:', curr)
  console.log('✅ acc.concat(curr):', acc.concat(curr))
  return acc.concat(curr)
}, [])

console.log('---------------------------------')
console.log('>>> array original:', array)
console.log('🚀 newArray:', newArray)

/**
 * Explanation:
 *
 * - Array.from({ length: repetitions }, () => array) creates a new array with repetitions number of elements, each initialized to the array
 *
 * - reduce((acc, curr) => acc.concat(curr), []) flattens the array of arrays into a single array, effectively concatenating all the repetitions of array
 *
 * - Finally, we log both the original array and the resulting newArray for clarity.
 */
