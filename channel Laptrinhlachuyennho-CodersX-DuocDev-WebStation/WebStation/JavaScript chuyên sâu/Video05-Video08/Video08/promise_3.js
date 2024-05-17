const somePromise = new Promise((resolve, reject) => {
  reject('hello')
})

// dùng catch bắt lỗi
somePromise
  .then(function () {
    throw new Error('oh noes')
  })
  .catch(function (error) {
    console.log('catch error:' + error)
  })

// dùng callback thứ 2 để bắt lỗi, vẫn bắt được reject
somePromise.then(
  function () {
    throw new Error('oh noes this is error')
  },
  function (error) {
    console.log('callback error:' + error)
  }
)
