// custom-instance.ts

import store from '@/app/store/store'
import { notification } from 'antd'
import axios, { AxiosRequestConfig } from 'axios'

interface IFetcherOptions {
  token?: string
  withToken?: boolean
  withMetadata?: boolean
  displayError?: boolean
  contentType?: string
}

// add a second `options` argument here if you want to pass extra options to each generated query
export async function customInstance<T>(
  config: AxiosRequestConfig,
  options: IFetcherOptions = {},
): Promise<T> {
  const axiosClient = axios.create({
    headers: {
      'Content-Type': options.contentType
        ? options?.contentType
        : 'application/json',
    },
    baseURL: 'https://develop-api.bookstore.dwarvesf.com/api/v1',
  })
  axiosClient.interceptors.request.use(async (config) => {
    const state = store.getState()
    const token = state.user?.userCurrent?.accessToken

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return new Promise<T>((resolve, reject) => {
    axiosClient
      .request(config)
      .then(async (response) => {
        if ('data' in response) {
          resolve(response.data)
        } else {
          reject(response)
        }
      })
      .catch((error) => {
        console.log(error)

        if (axios.isAxiosError(error)) {
          // Xử lý lỗi từ Axios
          notification.error({
            message: error.code,
            description: error.message,
          })
        } else if (error.response) {
          // Xử lý lỗi từ phản hồi (response)
          const responseData = error.response.data
          notification.error({
            message: responseData.code,
            description: responseData.message,
          })
        }
      })
  })
}
