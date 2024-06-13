import { Action } from './actions'

// Define the shape of a todo item
export interface Todo {
  id: number
  text: string
  completed: boolean
}

// Define the reducer function that handles the actions and updates the state
export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload)
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      )
    case 'SET_TODOS':
      return action.payload

    default:
      return state
  }
}
