import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from './reducer/authReducer'
import userReducer from './reducer/userReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
})
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store
