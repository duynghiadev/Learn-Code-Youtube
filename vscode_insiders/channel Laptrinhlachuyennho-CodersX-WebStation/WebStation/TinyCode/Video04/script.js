function callbackSync() {
  return 'sync'
}

function callbackAsync() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('async')
    }, 1000)
  })
  return promise
}

function parent(value, callback) {
  callback.then((data) => console.log(data))
  console.log(callback)
  console.log(value)
}

// parent('default', callbackSync())
parent('default', callbackAsync())
