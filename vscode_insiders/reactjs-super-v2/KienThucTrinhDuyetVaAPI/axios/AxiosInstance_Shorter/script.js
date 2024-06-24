const http = axios.create({
  baseURL: 'https://reqres.in/api'
})

http.interceptors.request.use(
  (config) => {
    console.log('config interceptors request:', config)
    config.headers.Timeout = 100
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (config) => {
    console.log('config interceptors response:', config)
    return config.data.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

http
  .get('/users')
  .then((res) => {
    console.log('GET --> res:', res)
  })
  .catch((error) => {
    console.warn(error)
  })

http
  .delete('/users/2')
  .then((res) => {
    console.log('DELETE --> res:', res)
  })
  .catch((error) => {
    console.warn(error)
  })
