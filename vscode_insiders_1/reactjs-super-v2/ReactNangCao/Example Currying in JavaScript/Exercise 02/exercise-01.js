/*
* In this code:
*
* - The multiply function performs simple multiplication of two numbers
*
* - The curry function takes a function fn and returns a curried version of it
*
* - Inside the curry function, curried is a recursive function that checks if enough arguments are provided. If not, it returns a new function waiting for more arguments
*
* - double, trice, and quad are curried versions of the multiply function with preset values
*
* - The usage examples demonstrate how to use these curried functions to multiply a number by a predefined factor.
* */

// Define a function for multiplication
function multiply(a, b) {
  return a * b
}

// Implement currying for the multiply function
function curry(fn) {
  return function curried(...args) {
    // If enough arguments are provided, call the function
    if (args.length >= fn.length) {
      return fn(...args)
    }
    // Otherwise, return a new function that waits for more arguments
    return function(...nextArgs) {
      return curried(...args, ...nextArgs)
    }
  }
}

// Create curried versions of the multiply function
const double = curry(multiply)(2)
const trice = curry(multiply)(3)
const quad = curry(multiply)(4)

// Usage examples
console.log(double(5)) // Output: 10 (2 * 5)
console.log(trice(5))  // Output: 15 (3 * 5)
console.log(quad(5))   // Output: 20 (4 * 5)
