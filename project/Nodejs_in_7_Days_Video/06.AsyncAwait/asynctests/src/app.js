const timeoutCallbackWithData = (timeout, data, cb) => {
  setTimeout(() => {
    return cb(data)
  }, timeout)
}

const timeoutPromiseWithData = (timeout, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === 'jelly') {
        return reject(new Error('no jelly allowed'))
      }

      return resolve(data)
    }, timeout)
  })
}

module.exports = { timeoutCallbackWithData, timeoutPromiseWithData }
