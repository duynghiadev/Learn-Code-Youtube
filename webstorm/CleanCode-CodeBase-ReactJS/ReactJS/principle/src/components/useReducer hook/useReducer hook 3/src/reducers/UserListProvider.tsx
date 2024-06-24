import axios from 'axios'
import { ReactNode, useEffect, useReducer } from 'react'
import { UserListContext, initialState } from '../context/UserListContext'
import './UserListProvider.scss'
import { User } from './actions'
import { userListReducer } from './reducers'

interface UserListProviderProps {
  children: ReactNode
}

const UserListProvider = ({ children }: UserListProviderProps) => {
  const [state, dispatch] = useReducer(userListReducer, initialState)

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({
        type: 'FETCH_USERS_START'
      })

      try {
        const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        dispatch({
          type: 'FETCH_USERS_SUCCESS',
          payload: data
        })
      } catch (error) {
        dispatch({
          type: 'FETCH_USERS_FAILURE',
          payload: 'Error fetching users'
        })
      }
    }

    fetchUsers()
  }, [])

  return (
    <UserListContext.Provider value={{ state, dispatch }}>
      <div className='user-list-provider'>{children}</div>
    </UserListContext.Provider>
  )
}

export { UserListContext, UserListProvider }
