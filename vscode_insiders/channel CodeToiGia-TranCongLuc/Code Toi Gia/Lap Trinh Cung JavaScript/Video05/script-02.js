const a = [1, 2, 3, 4]
const b = [1, 2, 3, 4]

// Check if every element in 'a' matches every element in 'b'
const checkArray = a.every((value, index) => {
  console.log('value:', value, '👉 index:', index, '👉 b[index]:', b[index])
  console.log('🎯 value === b[index]:', value === b[index])

  return value === b[index]
})
const isCheck = a.length === b.length && checkArray

console.log('------------------------------')
console.log('isCheck:', isCheck)

/**
 * Explanation:
 *
 * - We first compare the lengths of arrays a and b to ensure they are equal
 *
 * - Then, we use the every() method to iterate through each element of array a and check if it matches the corresponding element in array b. If any pair of elements doesn't match, every() will return false, indicating that the arrays are not identical
 *
 * - If both conditions are met (equal lengths and all elements match), isCheck will be true, otherwise false.
 */
