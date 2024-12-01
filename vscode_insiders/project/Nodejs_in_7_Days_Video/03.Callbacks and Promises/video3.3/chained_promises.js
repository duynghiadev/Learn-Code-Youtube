const myPromisedFunction = () => {
  console.log('myPromisedFunction()')

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

myPromisedFunction()
  .then(() => {
    return myPromisedFunction()
  })
  .then(() => {
    return myPromisedFunction()
  })
  .then(() => {
    console.log('done')
  })
