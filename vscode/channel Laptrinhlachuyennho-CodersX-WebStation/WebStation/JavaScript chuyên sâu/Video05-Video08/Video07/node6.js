const fs = require('fs')
const https = require('https')

console.log('1: \tSTART: HỌC CƠ BẢN') // Synchronous code

setTimeout(() => {
  // Timer
  console.log('2: \tsetTimeout 1', 0)
})

setImmediate(() => {
  // Checking
  console.log('3: \tsetImmediate')
})

// I/O polling using SYSTEM
https
  .get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
    console.log('4: \tI/O - Request - SYSTEM Polling, status:', res.statusCode)
    res.on('data', (d) => {})
  })

  .on('error', (e) => {
    console.error(e)
  })

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('5: \tsetTimeout trong readFile')
  }, 0)

  setImmediate(() => {
    console.log('6: \tsetImmediate trong readFile')
  })

  process.nextTick(() => {
    console.log('7: \tNextTick trong readFile')
  })
})

Promise.resolve().then(() => {
  // Micro Task
  console.log('8: \tPromise main thread')
  process.nextTick(() => {
    console.log('9: \tNextTick trong Promise')
  })
})

queueMicrotask(function () {
  // Micro Task
  console.log('10: \tThis is queueMicrotask')
})

process.nextTick(() => {
  // Micro Task
  console.log('11: \tNextTick main thread')
})

setTimeout(() => {
  // timer
  console.log('12: \tsetTimeout 2', 0)
})

console.log('13: \tEND') // Synchronous code
