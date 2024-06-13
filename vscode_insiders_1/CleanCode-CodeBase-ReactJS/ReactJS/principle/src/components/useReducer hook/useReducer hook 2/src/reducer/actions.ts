import { Todo } from './reducers'

// Define the possible actions that can be performed on a todo item
export type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number }
  | { type: 'EDIT_TODO'; payload: { id: number; text: string } }
  | { type: 'SET_TODOS'; payload: Todo[] }
