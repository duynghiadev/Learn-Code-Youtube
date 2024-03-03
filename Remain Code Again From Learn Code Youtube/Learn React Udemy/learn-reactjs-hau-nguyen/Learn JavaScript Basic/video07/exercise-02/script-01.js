function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Result from asyncOperation1')
    }, 1000)
  })
}

function asyncOperation2(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Result from asyncOperation2 with ${value}`)
    }, 1000)
  })
}

async function* asyncGenerator() {
  try {
    const result1 = yield asyncOperation1()
    return yield asyncOperation2(result1)
  } catch (error) {
    throw error
  }
}

async function runAsyncGenerator() {
  return new Promise(async (resolve, reject) => {
    const generator = asyncGenerator()
    let result
    try {
      result = await generator.next()
      while (!result.done) {
        result = await generator.next(result.value)
      }
      console.log('result.value:', result.value)
      resolve(result.value) // Resolve the promise with the final result
    } catch (error) {
      console.error('Error occurred:', error)
      reject(error) // Reject the promise if an error occurs
    }
  })
}

// Call runAsyncGenerator and handle the returned promise
runAsyncGenerator().then(() => {
  console.log('Async generator completed successfully')
}).catch((error) => {
  console.error('Async generator encountered an error:', error)
})
