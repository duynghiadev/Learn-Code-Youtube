// 1. sync and async
console.log('sync') // 1

setTimeout(() => {
  console.log('async - macrotask') // 4
}, 0)

queueMicrotask(() => {
  console.log('async - microtask - using queueMicrotask') // 2
})

Promise.resolve('async - microtask').then((data) => {
  console.log(data) // 3
})
