setTimeout(() => {
  console.log('1')
}, 1000)

new Promise((resolve, reject) => {
  console.log('2')
  resolve(3)
}).then((val) => {
  console.log(val)
})

console.log('4')

// Output: 2 -> 4 -> 3 -> 1
