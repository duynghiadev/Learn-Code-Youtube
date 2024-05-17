function jsPromise(callback) {}

jsPromise.prototype.then = function () {
  console.log('method prototype then update p1 and p2')
}

const p1 = new jsPromise(function () {})

p1.then()

const p2 = new jsPromise(function () {})

p2.then()

console.log('='.repeat(40))

jsPromise.prototype = 'thuộc tính'

jsPromise.resolve = function (value) {
  console.log('static method resolve: ' + value)
}

jsPromise.all = function (array) {
  console.log('static method all: ' + array)
}

jsPromise.resolve('duynghiadev')

console.log('='.repeat(40))

Promise.resolve(1000).then(function (data) {
  console.log('data của Promise static: ' + data)
})

// Nếu như chúng ta viết như này là sẽ bị lỗi ngay. Bởi vì prototype của Promise nó không cho phép sử dụng bên ngoài

const promise = new Promise(function (resolve, reject) {})

promise.resolve(2000).then(function (data) {
  console.log('data của object Promise: ' + data) // TypeError: promise.resolve is not a function
})
