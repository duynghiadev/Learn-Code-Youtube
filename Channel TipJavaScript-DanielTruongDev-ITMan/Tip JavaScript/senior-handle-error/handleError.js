function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject')
    }, 2000)
  })
}

// level 1
async function getData() {
  try {
    let res1 = await request('a')
  } catch (error) {
    // todo
    console.error('>>> Level 1 >>> Error res1:', error)
  }

  try {
    let res2 = await request('b')
  } catch (error) {
    // todo
    console.error('>>> Level 1 >>> Error res2:', error)
  }

  try {
    let res3 = await request('c')
  } catch (error) {
    console.error('>>> Level 1 >>> Error res3:', error)
  }
}
getData()

// Level 2
const getDataLevel2 = async () => {
  let res_other_1 = await request('a')
    .then((response) => console.log(response))
    .catch((error) => console.error('>>> Level 2 >>> Error res_other_1:', error))

  let res_other_2 = await request('b')
    .then((response) => console.log(response))
    .catch((error) => console.error('>>> Level 2 >>> Error res_other_2:', error))

  let res_other_3 = await request('c')
    .then((response) => console.log(response))
    .catch((error) => console.error('>>> Level 2 >>> Error res_other_3:', error))
}
getDataLevel2()

// Level 3

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

// custom code level 3 (I do it yourself)

// Define a function to handle requests asynchronously
const handleRequest = async (requestData) => {
  try {
    const result = await requestData() // Execute the request function and await its result
    return [undefined, result] // If successful, return result with no error
  } catch (error) {
    return [error, undefined] // If an error occurs, return error with no result
  }
}

// Define an array of requests to be processed sequentially
const requests = ['a', 'b', 'c'].map((id) => () => request(id))

// Process each request sequentially
;(async () => {
  for (let i = 0; i < requests.length; i++) {
    // Execute each request and handle errors
    const [error, result] = await handleRequest(requests[i])
    if (error) {
      // Log error if one occurs
      console.error(`👉 Custom from code level 3 👈 Error response ${i + 1}:`, error)
    } else {
      // Log result if request is successful
      console.log(`👉 Custom from code level 3 👈 Request ${i + 1} successful:`, result)
    }
  }
})()
