import axios from 'axios'

let store
export const injectStore = (_store) => {
  store = _store
}

// Set config defaults when creating the instance
const instance = axios.create({
  // baseURL: ''
  withCredentials: true
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // After defaults after instance has been created
    let headerToken = store.getState()?.account?.userInfo?.access_token ?? ''

    if (headerToken) {
      instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${headerToken}`
    }

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
