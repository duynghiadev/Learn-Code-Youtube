// 2. Timer và check phase trong I/O, Timer chạy ở vòng 2

const fs = require('fs') // Import the fs module

const start = Date.now() // Record the start time

// Function to calculate elapsed time
function thoiGian(bandau) {
  return Date.now() - bandau
}

// Read the current file asynchronously
fs.readFile(__filename, () => {
  setTimeout(() => {
    const lag = thoiGian(start)
    console.log(`Timer:\tsetTimeout thứ nhất - 0 giây:\tThời gian chạy:\t${lag} ms`)
  }, 0)

  setTimeout(() => {
    const lag = thoiGian(start)
    console.log(`Timer:\tsetTimeout thứ hai - 0 giây:\tThời gian chạy:\t${lag} ms`)
  }, 0)

  // Schedule a setImmediate callback to run as soon as possible after I/O events
  setImmediate(function () {
    const lag = thoiGian(start)
    console.log(`Check:\tsetImmediate:\tThời gian chạy:\t${lag} ms`)
  })

  // Log the filename
  console.log('Filename: ' + __filename)
})
