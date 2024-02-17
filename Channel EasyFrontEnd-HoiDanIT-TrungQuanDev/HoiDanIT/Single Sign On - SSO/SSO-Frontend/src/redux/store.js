import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { injectStore } from './../customize/axios.js'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

injectStore(store)

export default store
