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
    return data * 2 // have return promise
  })
  .then((data) => {
    console.log('ok 2:', data) // here receive data from then() method above
  })
  .catch((error) => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log('done')
  })
