const a = [4, 3, 5, 10, 9, 7, 8]
const b = [5, 7, 8]

// Create a set from array b for faster lookup
const bSet = new Set(b)
console.log('bSet:', bSet)

// Filter elements from array a that are not in array b
const c = a.reduce((result, item) => {
  if (!bSet.has(item)) {
    console.log('item:', item)
    result.push(item)
  }
  return result
}, [])

console.log('c:', c)

/**
 * Explanation:
 *
 * - We first convert array b into a Set object, which provides faster lookup time than an array for checking if an element exists
 *
 * - Then, we use the reduce() method to iterate over each element of array a
 *
 * - Within the reduce() function, we check if the current element (item) is not in the bSet. If it's not, we push it into the result array
 *
 * - The reduce() function accumulates these filtered elements into the result array, which is returned as the final result stored in c.
 */
