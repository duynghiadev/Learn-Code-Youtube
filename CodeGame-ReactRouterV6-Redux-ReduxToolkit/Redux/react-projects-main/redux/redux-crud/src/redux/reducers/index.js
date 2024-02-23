import { combineReducers } from "redux";
import userReducer from "./userReducer";

const reducer = combineReducers({
  users: userReducer,
});

export default reducer;
