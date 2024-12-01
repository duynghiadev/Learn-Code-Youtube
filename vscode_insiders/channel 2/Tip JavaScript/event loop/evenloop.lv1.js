console.log('0')

setTimeout(() => {
  console.log('1')
}, 1000)

new Promise((resolve, reject) => {
  console.log('2')
  resolve(3)
}).then((val) => {
  console.log(val)
})

new Promise((resolve, reject) => {
  console.log('4')
  resolve(5)
})
  .then((val) => {
    console.log(val)
  })
  .then(() => {
    console.log('then...2')
  })

console.log('6')

// Output: 0 -> 2 -> 4 -> 6 -> 3 -> 5 -> 1
