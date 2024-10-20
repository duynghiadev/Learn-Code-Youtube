const myPromise = new Promise((resolve, reject) => {
  let money = 1000
  if (money >= 1000) {
    resolve('Yes. I will buy you an IPhone✅')
  } else {
    reject("No. I don't have enought money❌")
  }
})

myPromise
  .then((message) => {
    console.log(message)
  })
  .catch((error) => {
    console.log(error)
  })
