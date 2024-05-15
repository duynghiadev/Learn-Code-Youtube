// 2. Timer và check phase trong I/O, Timer chạy ở vòng 2

const fs = require('fs') // Import the fs module

const start = Date.now() // Record the start time

// Function to calculate elapsed time
function thoiGian(bandau) {
  return Date.now() - bandau
}

setTimeout(() => {
  const lag = thoiGian(start)
  console.log(`Timer:\tsetTimeout thứ nhất - 0 giây:\tThời gian chạy:\t${lag} ms`)
}, 0)

// Read the current file asynchronously
fs.readFile(__filename, () => {
  console.log('I/O callback: ' + __filename)
})

// Schedule a setImmediate callback to run as soon as possible after I/O events
setImmediate(function () {
  const lag = thoiGian(start)
  console.log(`Check:\tsetImmediate:\tThời gian chạy:\t${lag} ms`)
})
