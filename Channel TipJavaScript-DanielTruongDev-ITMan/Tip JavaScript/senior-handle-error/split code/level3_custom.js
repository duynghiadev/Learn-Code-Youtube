// ✅✅✅✅ custom code level 3 (I do it yourself) ✅✅✅✅

function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject')
    }, 2000)
  })
}

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
      console.error(`👉 Custom from code level 3 👈 Error response ${i + 1}:`, error)
    } else {
      console.log(`👉 Custom from code level 3 👈 Request ${i + 1} successful:`, result)
    }
  }
})()
