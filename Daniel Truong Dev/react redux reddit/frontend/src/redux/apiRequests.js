import { updateError, updateStart, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://localhost:8000/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    console.log("error", err);
    dispatch(updateError());
  }
};
