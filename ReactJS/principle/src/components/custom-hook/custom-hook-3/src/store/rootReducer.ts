// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import userListReducer from './userListSlice'

const rootReducer = combineReducers({
  userList: userListReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
