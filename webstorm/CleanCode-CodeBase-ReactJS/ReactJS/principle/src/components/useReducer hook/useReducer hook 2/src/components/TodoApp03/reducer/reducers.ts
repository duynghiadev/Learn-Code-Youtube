import { Action } from './actions'

export interface Todo {
  id: number
  todo: string
  done: boolean
}

export const initialState: Todo[] = [
  {
    id: new Date().getTime(),
    todo: 'create useReducer example',
    done: false
  }
]

export const todoReducer = (state: Todo[] = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case '[TODO] add todo':
      return [...state, action.payload]

    case '[TODO] remove todo':
      return state.filter((todo) => todo.id !== action.payload)

    default:
      return state
  }
}
