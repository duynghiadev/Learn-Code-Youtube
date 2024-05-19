const p1 = Promise.resolve(1000)
const p2 = Promise.resolve(2000)
const p3 = Promise.reject('Error')

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is p4')
  }, 3000)
})

Promise.race([p4, p2, p3, p1])
  .then((data) => {
    console.log('data in race 1:', data)
  })
  .catch((error) => {
    console.log('error in race 1:', error)
  })

Promise.race([p3, p2, p4, p1])
  .then((data) => {
    console.log('data in race 2:', data)
  })
  .catch((error) => {
    console.log('error in race 2:', error)
  })
