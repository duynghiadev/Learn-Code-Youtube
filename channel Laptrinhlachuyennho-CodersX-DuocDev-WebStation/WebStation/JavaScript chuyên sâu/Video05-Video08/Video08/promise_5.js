const getPromise = (flag) => {
  const result = new Promise((resolve, reject) => {
    if (flag === true) {
      resolve(10)
    } else {
      reject('this is reject')
    }
  })
  return result
}

getPromise(true)
  .then((data) => {
    console.log('success:', data)
    return getPromise(true)
  })
  .then((data) => {
    console.log('then2:', data * 2)
  })
  .catch((error) => {
    console.log('failed in code true:', error)
  })

getPromise(false)
  .then((data) => {
    console.log('success:', data)
  })
  .catch((error) => {
    console.log('failed in code false:', error)
  })

console.log('Code Sync')

// macro task
setTimeout(() => {
  console.log('this is setTimeout')
}, 0)
