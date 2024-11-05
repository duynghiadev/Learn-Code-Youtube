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
    return data * 2
  })
  .then((dataFromThen1) => {
    console.log('ok dataFromThen1:', dataFromThen1)
  })
  .catch((error) => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log('done')
  })
