import { Dispatch, createContext } from 'react'
import { Action, State } from '../reducers/actions'

export const initialState: State = {
  users: [],
  loading: false,
  error: null
}

export const UserListContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined)
