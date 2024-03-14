const delay = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(timeout)
    }, timeout)
  })
}

const sequencer = (arr) => {
  let promise = Promise.resolve([])

  arr.forEach((func) => {
    promise = promise.then((results) => {
      return func().then((result) => {
        console.log(`Result: ${result}`)
        return results.concat(result)
      })
    })
  })

  return promise
}

const funcs = [
  () => {
    return delay(1000)
  },
  () => {
    return delay(2000)
  },
  () => {
    return delay(3000)
  }
]

sequencer(funcs)
  .then(([promise1, promise2, promise3]) => {
    console.log(promise1)
    console.log(promise2)
    console.log(promise3)
  })
  .catch((err) => {
    console.log(err)
  })
