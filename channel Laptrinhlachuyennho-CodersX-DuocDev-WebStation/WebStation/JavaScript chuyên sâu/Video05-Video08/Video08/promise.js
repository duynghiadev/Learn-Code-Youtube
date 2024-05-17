const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Đây là p1')
  }, 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Đây là p2')
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Đây là p3')
  }, 1000)
})

p1.then((data) => {
  console.log('data trong p1:', data)
  return p2
})
  .then((data) => {
    console.log('data trong p2:', data)
    return p3
  })
  .then((data) => {
    console.log('data finish:', data)
  })
