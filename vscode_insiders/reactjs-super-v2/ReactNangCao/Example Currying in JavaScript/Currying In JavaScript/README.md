# Lodash Library and Currying Exercise

## Introduction to Lodash

[Lodash](https://lodash.com/) is a popular JavaScript utility library that provides many useful
functions for common programming tasks. It is widely used for its simplicity, performance, and
consistency across different JavaScript environments.

Some key features of Lodash include:

- Collection manipulation functions like `map`, `filter`, and `reduce`.
- Utility functions for working with objects, arrays, strings, and functions.
- Support for functional programming concepts like currying, partial application, and composition.
- Performance optimizations for better efficiency.

## Currying in JavaScript with Lodash

Currying is a functional programming technique where a function that takes multiple arguments is
transformed into a series of functions, each taking a single argument. Lodash provides a convenient
method called `_.curry` to curry functions.

Here's a basic example demonstrating currying using Lodash:

```javascript
const _ = require('lodash');

// A simple function that takes three arguments
function multiply(a, b, c) {
  return a * b * c;
}

// Currying the function using lodash
const curriedMultiply = _.curry(multiply);

// Partially apply the curried function
const multiplyByTwo = curriedMultiply(2);
const multiplyByTwoAndThree = multiplyByTwo(3);

// Call the final function with the remaining argument
console.log(multiplyByTwoAndThree(4)); // Output: 24 (2 * 3 * 4)
```

In this example:

- We define a function multiply that takes three arguments and returns their product.
- We curry the multiply function using _.curry from Lodash.
- We create partially applied functions using the curried function.
- Finally, we call the partially applied function with the remaining arguments to get the result.

## Conclusion

- Lodash is a powerful library that simplifies JavaScript development by providing a wide range of
  utility functions. Currying, one of the functional programming techniques supported by Lodash,
  allows for creating more flexible and reusable code by breaking down functions into smaller units.