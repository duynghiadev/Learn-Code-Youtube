/*
* In this code:
*
* - The curry function is implemented using arrow functions and the spread operator (...). It checks if enough arguments are provided, and if not, it returns a new curried function
*
* - The multiply function is defined using arrow function syntax
*
* - double, trice, and quad are curried versions of the multiply function, created using the curry higher-order function
*
* - The usage examples demonstrate how to use these curried functions to multiply a number by a predefined factor.
* */

// Define a higher-order function for currying
const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...nextArgs) => curry(fn, ...args, ...nextArgs)

// Define a function for multiplication
const multiply = (a, b) => a * b

// Create curried versions of the multiply function
const double = curry(multiply, 2)
const trice = curry(multiply, 3)
const quad = curry(multiply, 4)

// Usage examples
console.log(double(5)) // Output: 10 (2 * 5)
console.log(trice(5))  // Output: 15 (3 * 5)
console.log(quad(5))   // Output: 20 (4 * 5)
