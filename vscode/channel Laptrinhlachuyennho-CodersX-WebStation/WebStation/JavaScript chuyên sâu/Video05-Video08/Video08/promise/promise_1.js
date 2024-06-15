const p1 = Promise.resolve(1000)
const p2 = Promise.resolve(2000)
const p3 = Promise.reject('Error')

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is p4')
  }, 3000)
})

Promise.all([p1, p2, p3, p4])
  .then((data) => {
    console.log('data:', data)
  })
  .catch((error) => {
    console.log('error:', error)
  })

Promise.all([p1, p2, p4])
  .then((data) => {
    console.log('data:', data)
  })
  .catch((error) => {
    console.log('error:', error)
  })
