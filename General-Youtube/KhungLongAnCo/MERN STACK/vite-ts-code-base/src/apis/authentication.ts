import { FormLogin } from 'types'
import { api, Api } from './api'

export class AuthenticationApi {
  instance: Api

  constructor(params: Api) {
    this.instance = params
  }
  public doLoginRequest = (payload: FormLogin) => {
    return this.instance.caller.post('http://localhost:3000/v1/auth/login', payload)
  }

  public getDetailUserRequest = (id: string) => {
    return this.instance.caller.get(`http://localhost:3000/v1/auth/${id}`)
  }
}

export const AuthenApis = new AuthenticationApi(api)
