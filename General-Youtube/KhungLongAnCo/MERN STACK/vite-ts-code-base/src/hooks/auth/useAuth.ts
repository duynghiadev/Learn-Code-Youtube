import { api } from 'apis/api'
import { AuthenApis } from 'apis/authentication'
import { ROUTERS, STORAGE } from 'defines'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { userActions } from 'store/user'
import { FormLogin } from 'types'

export const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const login = async (params: FormLogin) => {
    const res = await AuthenApis.doLoginRequest(params)
    const token = `Bearer ${res?.data?.data?.accessToken}`
    localStorage.setItem(STORAGE.ACCESS_TOKEN, token)
    api.setToken(token)
    dispatch(userActions.setAccessToken(token))
  }

  const getDetailUser = async (id: string) => {
    const res = await AuthenApis.getDetailUserRequest(id)
    // eslint-disable-next-line no-console
    console.log('Detail user', res.data)
  }

  const logout = () => {
    // call api
    localStorage.removeItem(STORAGE.ACCESS_TOKEN)
    navigate(ROUTERS.LOGIN)
    dispatch(userActions.clearToken())
  }

  return { login, getDetailUser, logout }
}
