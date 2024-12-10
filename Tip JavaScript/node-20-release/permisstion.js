const fs = require('fs')

console.log('test node v20')

const canWrite = process.permission.has('fs.write')
const canWriteTest = process.permission.has(
  'fs.write',
  '/study code/Study Code Project Youtube/Learn Code YouTube/Channel TipJavaScript-DanielTruongDev-ITMan/Tip JavaScript/node-20-release'
)

console.log('canWrite:', canWrite) // false
console.log('canWriteTest:', canWriteTest) // true

const canRead = process.permission.has('fs.read')
const canReadTest = process.permission.has(
  'fs.read',
  '/study code/Study Code Project Youtube/Learn Code YouTube/Channel TipJavaScript-DanielTruongDev-ITMan/Tip JavaScript/node-20-release'
)

console.log('canRead:', canRead) // false
console.log('canReadTest:', canReadTest) // true

fs.writeFile('./text.txt', 'Test write permission', (err, data) => {
  if (err) return console.error(err)
  console.log('write success')
})

fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err)
  console.log('Data:', data)
})
