import axios from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
  // baseURL: ''
  withCredentials: true
})

// After defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN'

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response
  },
  function (error) {
    console.log('>>> check error:', error)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error && error.response && error.response.data) {
      return error.response.data
    }
    return Promise.reject(error)
  }
)

export default instance
