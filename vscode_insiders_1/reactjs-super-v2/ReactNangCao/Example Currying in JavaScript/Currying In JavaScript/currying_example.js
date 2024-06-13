const _ = require('lodash')

// Function for multiplying three numbers
function multiply(a, b, c) {
  return a * b * c
}

// Currying the function using lodash
const curriedMultiply = _.curry(multiply)

// Partially apply the curried function with 2 as the first argument
const multiplyByTwo = curriedMultiply(2)

// Log the partially applied function
console.log('Partial application with 2:', multiplyByTwo)

// Separator
console.log('-'.repeat(20))

// Now you can call the partially applied function with one more argument
const multiplyByTwoAndThree = multiplyByTwo(3)

// Visual separator
console.log('='.repeat(30))
console.log('Executing the curried function:')

// Call the final function with the remaining argument
const result = multiplyByTwoAndThree(4)
console.log('Result:', result) // Output: 24 (2 * 3 * 4)

// Visual separator
console.log('='.repeat(30))
