const axios = require('axios')

const resultAPI = axios.get('https://jsonplaceholder.typicode.com/posts/10')
console.log('resultAPI:', resultAPI)

resultAPI
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
