// boolean, string, number, function
// Checking the type of a number
const num = 42
console.log('typeof num:', typeof num) // Output: "number"

// Number behavior
const anotherNum = 3.14159
console.log('anotherNum.toFixed(2):', anotherNum.toFixed(2)) // Output: "3.14"
console.log('Number.isInteger(num):', Number.isInteger(num)) // Output: true
console.log('Number.isInteger(anotherNum):', Number.isInteger(anotherNum)) // Output: false

console.log('='.repeat(40))

// Checking the type of a string
const str = 'Hello, world!'
console.log('typeof str:', typeof str) // Output: "string"

// String behavior
console.log('str.length:', str.length) // Output: 13
console.log('str.toUpperCase():', str.toUpperCase()) // Output: "HELLO, WORLD!"
console.log('str.includes("world"):', str.includes('world')) // Output: true

console.log('='.repeat(40))

// Checking the type of a boolean
const bool = true
console.log('typeof bool:', typeof bool) // Output: "boolean"

// Boolean behavior
const falseBool = false
console.log('bool && falseBool:', bool && falseBool) // Output: false
console.log('bool || falseBool:', bool || falseBool) // Output: true
console.log('!bool:', !bool) // Output: false

console.log('='.repeat(40))

// Checking the type of a function
function myFunction() {
  return 'Hello'
}
console.log('typeof myFunction:', typeof myFunction) // Output: "function"

// Function behavior
function add(a, b) {
  return a + b
}
console.log('add(2, 3):', add(2, 3)) // Output: 5
console.log('myFunction():', myFunction()) // Output: "Hello"

const arrowFunction = (a, b) => a * b
console.log('arrowFunction(3, 4):', arrowFunction(3, 4)) // Output: 12

console.log('='.repeat(40))

const myName = 'duynghiadev'
console.log('typeof myName:', typeof myName) // string
console.log('myName.length:', myName.length) // 11
console.log('myName.slice(0, 2).toUpperCase():', myName.slice(0, 2).toUpperCase()) // DU

console.log('='.repeat(40))

function Test() {
  return 'hello world'
}

Test.age = 12
Test.getName = function () {
  return 'hello something'
}
console.log('Test():', Test())
console.log('Test.age:', Test.age)
console.log('Test.getName():', Test.getName())

console.log('='.repeat(40))
