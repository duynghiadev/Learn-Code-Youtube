import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: postSlice,
  },
});
