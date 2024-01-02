// UserListProvider.tsx
import React, { createContext, useReducer, useEffect, ReactNode } from 'react'
import axios from 'axios'
import './UserListProvider.scss'

interface UserListProviderProps {
  children: ReactNode
}

interface User {
  id: number
  name: string
  email: string
}

interface State {
  users: User[]
  loading: boolean
  error: string | null
}

type Action =
  | { type: 'FETCH_USERS_START' }
  | { type: 'FETCH_USERS_SUCCESS'; payload: User[] }
  | { type: 'FETCH_USERS_FAILURE'; payload: string }

const initialState: State = {
  users: [],
  loading: false,
  error: null
}

const UserListContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined)

const userListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload, error: null }
    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const UserListProvider = ({ children }: UserListProviderProps) => {
  const [state, dispatch] = useReducer(userListReducer, initialState)

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'FETCH_USERS_START' })
      try {
        const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: 'Error fetching users' })
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

export { UserListProvider, UserListContext }
