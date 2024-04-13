import { Action, State } from './actions'

export const userListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null
      }

    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}
