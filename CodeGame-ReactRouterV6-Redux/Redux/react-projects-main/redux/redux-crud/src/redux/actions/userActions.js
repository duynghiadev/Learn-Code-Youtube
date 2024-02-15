import api from "../../api/axiosInstance";
import { actionTypes } from "../constants/actionTypes";

export const getAllUsers = () => {
  return async (dispatch) => {
    const { data } = await api.get("/users");
    dispatch(getAllUsersSuccess(data));
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    const { data } = await api.post("/users", user);
    dispatch(addUserSuccess(data));
  };
};

export const editUser = (updatedUser, id) => {
  return async (dispatch) => {
    console.log(updatedUser);
    const { data } = await api.put(`/users/${id}`, updatedUser);
    dispatch({ type: actionTypes.EDIT_USER_SUCCESS, payload: data });
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    const res = await api.delete(`/users/${userId}`);
    dispatch(deleteUserSuccess(userId));
  };
};

export const getAllUsersSuccess = (users) => {
  return { type: actionTypes.GET_ALL_USERS_SUCCESS, payload: users };
};

export const addUserSuccess = (user) => {
  return { type: actionTypes.ADD_USER_SUCCESS, payload: user };
};

export const updateUserSuccess = (user) => {
  return { type: actionTypes.EDIT_USER_SUCCESS, payload: user };
};

export const deleteUserSuccess = (id) => {
  return { type: actionTypes.DELETE_USER_SUCCESS, payload: id };
};
