const promise = new Promise((resolve, reject) => {
  const job = true
  if (job === true) {
    resolve(10)
  } else {
    reject(100)
  }
})

promise
  .then((data) => {
    console.log('ok 1:', data)
  })
  .then((data) => {
    console.log('ok 2:', data) // undefined -> because it's no receive data from above
  })
  .catch((error) => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log('done')
  })
