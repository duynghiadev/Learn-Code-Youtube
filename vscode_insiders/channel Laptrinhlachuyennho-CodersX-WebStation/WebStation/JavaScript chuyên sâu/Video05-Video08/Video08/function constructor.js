console.log('typeof Promise:', typeof Promise)

const a = new Promise(function (yes, no) {})
console.log('typeof a:', typeof a)

console.log('='.repeat(40))

class jsPromise {
  constructor(callback) {
    this.callback = callback
  }
  then() {
    console.log('Thêm method')
    return this // Return the instance to allow chaining
  }
}

const promise = new jsPromise()
promise.then().then().then()
