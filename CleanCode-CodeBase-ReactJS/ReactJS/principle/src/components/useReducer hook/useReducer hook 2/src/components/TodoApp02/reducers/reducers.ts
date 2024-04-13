import { Action } from './actions'

export interface Todo {
  name: string
  checked: boolean
}

export const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]

    case 'DELETE_TODO':
      return state.filter((element) => element.name !== action.payload)

    case 'CHECK_TODO':
      return state.map((element) => ({
        ...element,
        checked: action.payload === element.name ? !element.checked : element.checked
      }))

    default:
      return state
  }
}
