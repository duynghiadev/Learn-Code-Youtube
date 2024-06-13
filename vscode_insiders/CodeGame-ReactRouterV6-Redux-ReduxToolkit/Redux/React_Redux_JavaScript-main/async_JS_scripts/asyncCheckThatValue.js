const asyncAction = () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100) + 1

    setTimeout(() => {
      if (random <= 50) {
        resolve({
          value: random,
          status: 'OK'
        })
      } else {
        reject({
          value: random,
          status: 'ERROR',
          errorMsg: 'Value is greater then 50'
        })
      }
    }, 1250)
  })
}

//my code below - dealing with result from asyncAction function!

document.addEventListener('DOMContentLoaded', (e) => {
  asyncAction()
    .then((res) => {
      const randomValue = document.getElementById('random-value')
      console.log(res.value)
      randomValue.innerText = res.value + ' cool, great, wonderful!'
    })
    .catch((err) => {
      console.log(err)
      console.log(err.errorMsg)
      const message = document.getElementById('message')
      message.innerText = err.errorMsg + ' ! Not cool!'
    })
})
