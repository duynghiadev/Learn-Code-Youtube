import { combineReducers } from 'redux'

import posts from './postsReducer'
import users from './userReducer'

export default combineReducers({
  posts,
  users
})