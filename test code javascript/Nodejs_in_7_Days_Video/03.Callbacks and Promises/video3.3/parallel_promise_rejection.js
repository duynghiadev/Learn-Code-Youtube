const myPromisedFunction = () => {
  console.log('myPromisedFunction()')

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

const myRejectingFunction = () => {
  console.log('myRejectingFunction()')

  return new Promise((resolve, reject) => {
    setTimeout(reject, 10)
  })
}

Promise.all([myPromisedFunction(), myRejectingFunction(), myPromisedFunction()])
  .then(() => {
    console.log('done')
  })
  .catch(() => {
    console.log('error')
  })
