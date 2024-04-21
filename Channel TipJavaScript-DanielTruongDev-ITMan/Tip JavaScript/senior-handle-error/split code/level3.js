function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject')
    }, 2000)
  })
}

const handlerRequest = (promise) => {
  return promise.then((data) => [undefined, data]).catch((error) => [error, undefined])
}

;(async () => {
  let error, result
  ;[error, result] = await handlerRequest(request('a'))
  if (error) {
    console.error('>>> Level 3 >>> Error response 1:', error)
  }

  ;[error, result] = await handlerRequest(request('b'))
  if (error) {
    console.error('>>> Level 3 >>> Error response 2:', error)
  }

  ;[error, result] = await handlerRequest(request('c'))
  if (error) {
    console.error('>>> Level 3 >>> Error response 3:', error)
  }
})()
