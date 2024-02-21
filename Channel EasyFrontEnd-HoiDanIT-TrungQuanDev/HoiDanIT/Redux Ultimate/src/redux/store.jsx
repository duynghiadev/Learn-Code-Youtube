import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// includes: reducers, middleware,...

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
