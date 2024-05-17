const promise = new Promise((resolve, reject) => {
  const job = true
  if (job === true) {
    resolve(10)
  } else {
    reject(1000)
  }
})

promise
  .then((data) => {
    console.log('ok data:', data)
    return test(data)
  })
  .then((data2) => {
    console.log('ok data2:', data2)
  })
  .then(() => {
    console.log('ok nữa')
  })
  .catch((error) => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log('done')
  })

function test(arg) {
  return Promise.resolve(90 + arg)
}
