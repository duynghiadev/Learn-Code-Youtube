interface AppState {
  user: string
}

type AppAction = {
  type: 'SET_USER'
  payload: string
}

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    default:
      return state
  }
}
