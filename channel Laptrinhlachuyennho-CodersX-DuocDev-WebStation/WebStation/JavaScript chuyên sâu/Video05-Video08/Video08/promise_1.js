const promise = new Promise(function (resolve, reject) {
  const job = true
  if (job === true) {
    resolve(10)
  } else {
    reject(100)
  }
})

promise
  .then((data) => {
    console.log('OK:', data)
  })
  .catch((data) => {
    console.log('Lỗi:', data)
  })
  .finally((data) => {
    console.log('done')
  })
