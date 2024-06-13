export interface User {
  id: number
  name: string
  email: string
}

export interface State {
  users: User[]
  loading: boolean
  error: string | null
}

export type Action =
  | { type: 'FETCH_USERS_START' }
  | { type: 'FETCH_USERS_SUCCESS'; payload: User[] }
  | { type: 'FETCH_USERS_FAILURE'; payload: string }
