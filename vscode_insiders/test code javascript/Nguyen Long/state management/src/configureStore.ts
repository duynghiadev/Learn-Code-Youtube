import { reducerCounter } from './Counter/reducer'
import { combineReducers, createStore } from './store'

const reducers = combineReducers({
  counter: reducerCounter
})

export const store = createStore(reducers)
