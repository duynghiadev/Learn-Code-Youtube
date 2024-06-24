const ourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve('Hello, world!')
  }, 1000)
})

ourPromise
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
