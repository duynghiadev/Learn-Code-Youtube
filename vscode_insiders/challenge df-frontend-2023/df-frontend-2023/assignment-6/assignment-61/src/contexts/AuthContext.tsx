import {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import apiService from '../app/apiService'
import { isValidToken } from '../utils/jwt'
import { IUser } from '../interface/user.model'

interface IState {
  isInitialized: boolean
  isAuthenticated: boolean
  data: IUser | null
}

interface IAuthAction {
  type:
    | 'AUTH.INITIALIZE'
    | 'AUTH.LOGIN_SUCCESS'
    | 'AUTH.REGISTER_SUCCESS'
    | 'AUTH.LOGOUT'
  payload: { isAuthenticated: boolean; data: IUser }
}

const initialState: IState = {
  isInitialized: false,
  isAuthenticated: false,
  data: {
    id: 1,
    email: '',
    fullName: '',
  },
}

const INITIALIZE = 'AUTH.INITIALIZE'
const LOGIN_SUCCESS = 'AUTH.LOGIN_SUCCESS'
const REGISTER_SUCCESS = 'AUTH.REGISTER_SUCCESS'
const LOGOUT = 'AUTH.LOGOUT'

const reducer = (state: IState, action: IAuthAction) => {
  switch (action.type) {
    case INITIALIZE: {
      const { isAuthenticated, data } = action.payload
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        data,
      }
    }
    case LOGIN_SUCCESS: {
      const { isAuthenticated, data } = action.payload
      return {
        ...state,
        isAuthenticated,
        data,
      }
    }
    case REGISTER_SUCCESS: {
      const { data } = action.payload
      return {
        ...state,
        isAuthenticated: true,
        data,
      }
    }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        data: null,
      }
    default:
      return state
  }
}

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    window.localStorage.setItem('accessToken', accessToken)
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  } else {
    window.localStorage.removeItem('accessToken')
    delete apiService.defaults.headers.common.Authorization
  }
}

const AuthContext = createContext({ ...initialState })

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken')
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken)
          const response = await apiService.get('/me')
          const { data } = response.data
          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: true, data },
          })
        } else {
          setSession('')

          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              data: {
                id: 1,
                email: '',
                fullName: '',
              },
            },
          })
        }
      } catch (err) {
        console.error('Error in initialize:', err)
        setSession('')
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            data: {
              id: 1,
              email: '',
              fullName: '',
            },
          },
        })
      }
    }

    initialize()
  }, [])

  const login = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        const response = await apiService.post('/auth/login', {
          email,
          password,
        })

        const { data } = response.data
        setSession(data.accessToken)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { isAuthenticated: true, data },
        })
      } catch (error) {
        if (error) {
          throw new Error(error)
        } else {
          throw new Error('An error occurred. Please check your credentials.')
        }
      }
    },
    [],
  )

  const signup = useCallback(
    async ({
      fullName,
      email,
      password,
    }: {
      fullName: string
      email: string
      password: string
    }) => {
      try {
        const response = await apiService.post('/auth/signup', {
          fullName,
          email,
          password,
        })

        const { data } = response.data
        setSession(data.accessToken)
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { isAuthenticated: true, data },
        })
      } catch (error) {
        if (error) {
          throw new Error(error)
        } else {
          throw new Error('An error occurred.')
        }
      }
    },
    [],
  )

  const logout = useCallback(async () => {
    setSession(null)
    dispatch({
      type: LOGOUT,
      payload: {
        isAuthenticated: false,
        data: {
          id: 1,
          email: '',
          fullName: '',
        },
      },
    })
  }, [])

  const contextValue = useMemo(
    () => ({
      ...state,
      login,
      signup,
      logout,
    }),
    [login, signup, logout, state],
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
