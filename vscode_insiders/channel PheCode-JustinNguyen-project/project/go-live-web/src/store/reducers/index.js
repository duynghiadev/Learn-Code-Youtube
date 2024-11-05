import { combineReducers } from 'redux';
import userReducer from './user';
import messageReducer from './message';
import courseReducer from './course';
import videoReducer from './video';
import noteReducer from './note';
import blogReducer from './blog';

const rootReducers = combineReducers({
  user: userReducer,
  message: messageReducer,
  course: courseReducer,
  video: videoReducer,
  note: noteReducer,
  blog: blogReducer,
});

export default rootReducers;
