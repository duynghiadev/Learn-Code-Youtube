import axios from 'axios'
import { userAdminLocalStorage, userLocalStorage } from './localService'
import { store } from '../main'
import { setLoadingOff, setLoadingOn } from '../redux/spinnerSlice'

export const TOKEN_CYBER = import.meta.env.VITE_TOKEN_CYBERSOFT

const token = userLocalStorage.get()?.token

export const configHeaders = () => {
  return {
    Authorization: `Bearer ${token}`,
    tokenCybersoft: TOKEN_CYBER,
    token
  }
}

export const BASE_URL = 'https://airbnbnew.cybersoft.edu.vn/api'
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...configHeaders()
  }
})

export const httpsNoLoading = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...configHeaders()
  }
})

https.interceptors.request.use(
  (config) => {
    store.dispatch(setLoadingOn())
    return config
  },
  (err) => {
    store.dispatch(setLoadingOff())
    return Promise.reject(err)
  }
)

https.interceptors.response.use(
  (res) => {
    store.dispatch(setLoadingOff())
    return res
  },
  (err) => {
    store.dispatch(setLoadingOff())
    return Promise.reject(err)
  }
)

// DUNG CHO ADMIN PAGE
const tokenAdmin = userAdminLocalStorage.get()?.token
export const httpsAdmin = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `${tokenAdmin}`,
    tokenCybersoft: TOKEN_CYBER
  }
})

httpsAdmin.interceptors.request.use(
  (config) => {
    store.dispatch(setLoadingOn())
    return config
  },
  (err) => {
    store.dispatch(setLoadingOff())
    return Promise.reject(err)
  }
)

httpsAdmin.interceptors.response.use(
  (res) => {
    store.dispatch(setLoadingOff())
    return res
  },
  (err) => {
    store.dispatch(setLoadingOff())
    return Promise.reject(err)
  }
)
