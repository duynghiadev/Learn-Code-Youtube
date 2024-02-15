import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import accountReducer from './accountReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  account: accountReducer
})

export default rootReducer
