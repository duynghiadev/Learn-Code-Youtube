const myPromisedFunction = () => {
  console.log('myPromisedFunction()')

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

Promise.all([myPromisedFunction(), myPromisedFunction(), myPromisedFunction()]).then(() => {
  console.log('done')
})
