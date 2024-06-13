console.log('Step 1')

setTimeout(() => {
  console.log('Set Timeout')
}, 0)

Promise.resolve().then(() => {
  console.log('Promise')
})

console.log('Step 2')
