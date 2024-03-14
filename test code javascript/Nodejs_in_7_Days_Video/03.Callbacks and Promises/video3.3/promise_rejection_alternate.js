const ourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject(new Error('Goodbye, world!'))
  }, 1000)
})

ourPromise.then(
  (data) => {
    console.log('success')
  },
  (err) => {
    console.log(err)
  }
)
