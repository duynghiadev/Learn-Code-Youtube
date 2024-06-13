import { combineReducers } from 'redux'
import { COUNTING, ROCKET_LAUNCH } from './actions'

const counterInitialState = {
  counter: 0,
  error: '',
  launched: false,
  list: []
}

const counterReducer = (state = counterInitialState, { type, payload }) => {
  switch (type) {
    case COUNTING:
      return {
        ...state,
        launched: true,
        counter: state.counter + 1
      }

    // case STOP:
    //             return {
    //                 ...state,
    //                 launched: false,
    //                 counter: state.counter + 1,
    //
    //             };

    case ROCKET_LAUNCH:
      return {
        ...state,
        counter: 0,
        launched: true
      }

    default:
      return state
  }
}

export { counterInitialState }
export default combineReducers({
  counterState: counterReducer
})
