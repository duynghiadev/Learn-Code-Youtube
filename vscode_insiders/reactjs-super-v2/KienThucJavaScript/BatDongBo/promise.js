// async callback regular --> use promise
setTimeout(() => {
  console.log('setTimeout 1 second --> hello')
}, 1000)

// switch to promise
const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve in promise')
    }, 2000)
  })
}

promise()
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Finally')
  })

console.log('--> run first!!!')
