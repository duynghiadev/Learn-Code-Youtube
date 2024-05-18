const result = new Promise((resolve, reject) => {
  const flag = true

  if (flag === true) {
    resolve(10)
  } else {
    reject('this is reject')
  }
})

result
  .then((data) => {
    console.log('success:', data)
  })
  .catch((error) => {
    console.log('failed:', error)
  })

console.log('Code Sync')

// macro task
setTimeout(() => {
  console.log('this is setTimeout')
}, 0)
