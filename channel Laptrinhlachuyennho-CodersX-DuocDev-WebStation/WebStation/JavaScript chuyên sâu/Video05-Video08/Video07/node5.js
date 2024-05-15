// nextTick và setImmediate

setImmediate(() => console.log('check1'))

setImmediate(() => {
  console.log('check2')
  process.nextTick(() => console.log(`nextTick`))
})

setImmediate(() => console.log('check3'))
setImmediate(() => console.log('check4'))
