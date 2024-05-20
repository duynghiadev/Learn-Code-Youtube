// Object Wrappers in JavaScript

// String Object Wrapper
const strPrimitive = 'Hello, world!'
console.log('typeof strPrimitive:', typeof strPrimitive) // Output: "string"

const strObject = new String('Hello, world!')
console.log('typeof strObject:', typeof strObject) // Output: "object"
console.log('strObject instance of String:', strObject instanceof String) // Output: true

// Using String methods
console.log('strObject.length:', strObject.length) // Output: 13
console.log('strObject.toUpperCase():', strObject.toUpperCase()) // Output: "HELLO, WORLD!"

console.log('='.repeat(40))

// Number Object Wrapper
const numPrimitive = 42
console.log('typeof numPrimitive:', typeof numPrimitive) // Output: "number"

const numObject = new Number(42)
console.log('typeof numObject:', typeof numObject) // Output: "object"
console.log('numObject instance of Number:', numObject instanceof Number) // Output: true

// Using Number methods
console.log('numObject.toFixed(2):', numObject.toFixed(2)) // Output: "42.00"
console.log('numObject.toString():', numObject.toString()) // Output: "42"

console.log('='.repeat(40))

// Boolean Object Wrapper
const boolPrimitive = true
console.log('typeof boolPrimitive:', typeof boolPrimitive) // Output: "boolean"

const boolObject = new Boolean(true)
console.log('typeof boolObject:', typeof boolObject) // Output: "object"
console.log('boolObject instance of Boolean:', boolObject instanceof Boolean) // Output: true

// Using Boolean methods
console.log('boolObject.toString():', boolObject.toString()) // Output: "true"

console.log('='.repeat(40))

// Symbol Object Wrapper
const symPrimitive = Symbol('symbol')
console.log('typeof symPrimitive:', typeof symPrimitive) // Output: "symbol"

const symObject = Object(symPrimitive)
console.log('typeof symObject:', typeof symObject) // Output: "object"
console.log('symObject instance of Symbol:', symObject instanceof Symbol) // Output: true

console.log('='.repeat(40))

// BigInt Object Wrapper
const bigIntPrimitive = BigInt(9007199254740991)
console.log('typeof bigIntPrimitive:', typeof bigIntPrimitive) // Output: "bigint"

const bigIntObject = Object(bigIntPrimitive)
console.log('typeof bigIntObject:', typeof bigIntObject) // Output: "object"
console.log('bigIntObject instance of BigInt:', bigIntObject instanceof BigInt) // Output: true

console.log('='.repeat(40))

const x = 'hello'
const y = new String('world')
console.log(`${x} - ${y}`)
