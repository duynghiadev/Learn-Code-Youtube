const promise = function asyncOperator(name) {
  return new Promise((resolve, reject) => {
    resolve(name)
  })
}

promise('duynghiadev')
  .then((name) => {
    console.log(`hello ${name}`)
  })
  .catch((error) => {
    console.log(`This is error: ${error}`)
  })
