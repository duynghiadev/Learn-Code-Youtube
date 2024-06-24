axios({
  method: 'GET',
  baseURL: 'https://reqres.in/api',
  url: '/users'
})
  .then((res) => {
    console.log('Axios Instance --> Method GET -->', res)
  })
  .catch((error) => {
    console.warn(error)
  })

axios({
  method: 'DELETE',
  baseURL: 'https://reqres.in/api',
  url: '/users/2'
})
  .then((res) => {
    console.log('Axios Instance --> Method DELETE -->', res)
  })
  .catch((error) => {
    console.warn(error)
  })
