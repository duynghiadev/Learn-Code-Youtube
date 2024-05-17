const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('https://www.youtube.com/@hoccoban')
  }, 0)
})

promise
  .then((data) => {
    console.log('OK:', data)
  })
  .catch((error) => {
    console.log('Error:', error)
  })
  .finally(() => {
    console.log('done')
  })
