import { combineReducers } from 'redux'
import cartReducer from './Product/reducers/index'

const rootReducer = combineReducers({
  cart: cartReducer
})

export default rootReducer
