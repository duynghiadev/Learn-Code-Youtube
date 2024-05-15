// Phân biệt Micro Task và Macro Task

console.log('Đây là code đồng bộ 1')

setTimeout(() => {
  console.log('Đây là setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('Đây là promise 1')
})

queueMicrotask(() => {
  console.log('Đây là queueMicrotask')
})

Promise.resolve().then(() => {
  console.log('Đây là promise 2')
})

console.log('Đây là code đồng bộ 2')
