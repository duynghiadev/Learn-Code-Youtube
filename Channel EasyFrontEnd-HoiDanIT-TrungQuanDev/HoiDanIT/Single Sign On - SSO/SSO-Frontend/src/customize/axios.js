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
      config.headers.Authorization = `Bearer ${headerToken}`
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
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 400) {
      // If the error has status code 429, retry the request
      let headerToken = store.getState()?.account?.userInfo?.access_token ?? ''
      if (headerToken) {
        error.config.headers.Authorization = `Bearer ${headerToken}`
      }
      return axios.request(error.config)
    }

    if (error && error.response && error.response.data) {
      return error.response.data
    }
    return Promise.reject(error)
  }
)

export default instance
