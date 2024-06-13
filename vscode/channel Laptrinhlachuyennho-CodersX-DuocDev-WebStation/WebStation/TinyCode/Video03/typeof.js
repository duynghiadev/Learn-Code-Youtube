// Checking the type of a number
const num = 42
console.log('typeof num:', typeof num) // Output: "number"

// Checking the type of a string
const str = 'Hello, world!'
console.log('typeof str:', typeof str) // Output: "string"

// Checking the type of a boolean
const bool = true
console.log('typeof bool:', typeof bool) // Output: "boolean"

// Checking the type of an object
const obj = { key: 'value' }
console.log('typeof obj:', typeof obj) // Output: "object"

// Checking the type of an array
const arr = [1, 2, 3]
console.log('typeof arr:', typeof arr) // Output: "object"
console.log('typeof Array.isArray([]):', Array.isArray([]))

// Checking the type of a function
function myFunction() {
  return 'Hello'
}
console.log('typeof myFunction:', typeof myFunction) // Output: "function"

// Checking the type of undefined
let undefined
console.log('typeof undefined:', typeof undefined) // Output: "undefined"

// Checking the type of null
const nullValue = null
console.log('typeof nullValue:', typeof nullValue) // Output: "object"

// Checking the type of a symbol
const sym = Symbol('symbol')
console.log('typeof sym:', typeof sym) // Output: "symbol"

// Checking the type of a BigInt
const bigIntValue = BigInt(9007199254740991)
console.log('typeof bigIntValue:', typeof bigIntValue) // Output: "bigint"
