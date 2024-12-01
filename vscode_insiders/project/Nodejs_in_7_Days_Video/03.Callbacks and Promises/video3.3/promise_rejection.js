const ourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error('Goodbye, world!')
  }, 1000)
})

ourPromise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err) // throw new Error('Goodbye, world!') --> Error: Goodbye, world!
  })
