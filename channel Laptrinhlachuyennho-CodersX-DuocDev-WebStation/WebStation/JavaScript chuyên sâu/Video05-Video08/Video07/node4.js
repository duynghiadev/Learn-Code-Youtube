// nextTick và queueMicroTask
// những thứ này chỉ có khi mà mình sử dụng version node > 11 thì mới có

setTimeout(() => console.log('timeout1'))

setTimeout(() => {
  console.log('timeout2')
  process.nextTick(function () {
    console.log(`MicroTask - nextTick`)
  })

  Promise.resolve().then(() => console.log('promise resolve'))
})

setTimeout(() => console.log('timeout3'))

setTimeout(() => console.log('timeout4'))

queueMicrotask(() => {
  console.log('Đây là queueMicrotask')
})
