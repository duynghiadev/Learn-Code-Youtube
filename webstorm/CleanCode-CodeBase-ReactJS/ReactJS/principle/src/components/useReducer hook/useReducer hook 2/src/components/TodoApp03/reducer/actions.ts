import { Todo } from './reducers'

export type Action =
  | { type: '[TODO] add todo'; payload: Todo }
  | { type: '[TODO] remove todo'; payload: number }
