import { Todo } from './reducers'

export type Action =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'CHECK_TODO'; payload: string }
