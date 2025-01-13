import axios from 'axios'

const apiService = axios.create({
  baseURL: process.env.BASE_URL,
})

apiService.interceptors.request.use(
  (request) => {
    // console.log('Start Request', request)
    return request
  },
  function RequestError(error) {
    // console.log('REQUEST ERROR', error)
    return Promise.reject(error)
  },
)

apiService.interceptors.response.use(
  (response) => {
    // console.log('Response', response)
    return response
  },
  function ResponseError(error) {
    // console.log('RESPONSE ERROR', error)
    const message = error.response?.data?.message || 'Unknown error'
    const rejectionError = new Error(message)
    return Promise.reject(rejectionError)
  },
)

export default apiService
