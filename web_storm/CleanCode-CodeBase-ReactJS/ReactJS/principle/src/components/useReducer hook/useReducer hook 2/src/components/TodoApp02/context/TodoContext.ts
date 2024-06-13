import { Dispatch, createContext } from 'react'
import { Action } from '../reducers/actions'

export const TodoContext = createContext<Dispatch<Action>>(() => {})
