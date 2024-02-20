import { createStore } from 'redux'
import rootReducer from '../reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())

export default store
