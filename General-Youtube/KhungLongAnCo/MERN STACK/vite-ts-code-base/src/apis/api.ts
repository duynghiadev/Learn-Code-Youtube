import axios, { AxiosInstance } from 'axios'

export class Api {
  caller!: AxiosInstance
  static instance: Api
  static getInstance = () => {
    if (!Api.instance) {
      Api.instance = new Api()
    }
    return Api.instance
  }

  constructor() {
    const api = axios.create()
    this.caller = api
  }

  setToken = (token: string) => {
    this.caller.defaults.headers.common.Authorization = token
  }

  removeToken = () => {
    this.caller.defaults.headers.common.Authorization = ''
  }
}

export const api = Api.getInstance()
