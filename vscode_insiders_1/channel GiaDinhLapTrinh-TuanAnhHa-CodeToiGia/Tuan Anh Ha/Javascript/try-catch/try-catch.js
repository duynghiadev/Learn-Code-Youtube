/**
 * - Khái niệm của try-catch trong JavaScript?
 * - try-catch là công cụ được dùng để kiểm tra lỗi và bắt lỗi trong JavaScript
 */
const axios = require('axios')

const linkAPI = 'https://jsonplaceholder.typicode.com/users'

const printOut = (users) => {
  console.log('users.data:', users.data)
}

const getUsers = (url, callbackFunc) => {
  axios.get(url).then(callbackFunc)
}

try {
  getUsers(linkAPI, printOut)
} catch (error) {
  console.log({
    name: error.name,
    message: error.message
  })
} finally {
  console.log('Ending call APIs...')
}

console.log('-------------------------------------------')

let addNum = (a, b) => {
  return a + b
}

try {
  let totals = addNum(1, 2)
  console.log(`total: ${totals}`)
} catch (error) {
  console.log({
    name: error.name,
    message: error.message
  })
} finally {
  console.log('Ending Program...')
}

console.log('-------------------------------------------')

