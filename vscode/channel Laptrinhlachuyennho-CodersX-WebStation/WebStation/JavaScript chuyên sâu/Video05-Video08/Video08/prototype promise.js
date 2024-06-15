function jsPromise(callback) {}

// Define the 'then' method on jsPromise's prototype
jsPromise.prototype.then = function () {
  console.log('method prototype then update p1 and p2')
}

const p1 = new jsPromise(function () {})

p1.then() // method prototype then update p1 and p2

const p2 = new jsPromise(function () {})

p2.then() // method prototype then update p1 and p2

console.log('='.repeat(40)) // ========================================

jsPromise.prototype = 'thuộc tính' // Replace the prototype of jsPromise with a string, removing the 'then' method

jsPromise.resolve = function (value) {
  console.log('static method resolve: ' + value)
}

jsPromise.all = function (array) {
  console.log('static method all: ' + array)
}

jsPromise.resolve('duynghiadev') // static method resolve: duynghiadev

console.log('='.repeat(40)) // ========================================

Promise.resolve(1000).then(function (data) {
  console.log('data của Promise static: ' + data) // data của Promise static: 1000
})

// If we write like this, it will cause an error immediately. Because the prototype of Promise does not allow it to be used externally
const promise = new Promise(function (resolve, reject) {})

promise.resolve(2000).then(function (data) {
  console.log('data của object Promise: ' + data) // TypeError: promise.resolve is not a function
})
