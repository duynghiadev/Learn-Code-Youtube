// Trong bài này mình sẽ sử dụng callback + axios để lấy và in ra thông tin từ phía API.

const axios = require('axios')

const linkAPI = 'https://jsonplaceholder.typicode.com/users'

const printOut = (users) => {
  console.log('users.data:', users.data)
}

const getUsers = (url, callbackFunc) => {
  axios.get(url).then(callbackFunc)
}

getUsers(linkAPI, printOut)
