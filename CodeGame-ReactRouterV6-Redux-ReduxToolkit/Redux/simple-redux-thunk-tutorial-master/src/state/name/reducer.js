import { UPDATE, RESET } from './actionTypes'

const initialState = { currentName: '' }

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE: return { currentName: action.data }
    case RESET: return initialState
    default: return state
  }
}

export default nameReducer
