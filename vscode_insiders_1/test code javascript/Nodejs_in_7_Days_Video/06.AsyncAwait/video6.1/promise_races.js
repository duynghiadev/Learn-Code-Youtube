const delay = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(timeout)
    }, timeout)
  })
}

Promise.race([delay(1000), delay(20), delay(3000)])
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
