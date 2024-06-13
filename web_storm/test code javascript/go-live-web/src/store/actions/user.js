import {
  REGISTER,
  LOGIN,
  UPDATE_USER,
  LOAD_CHAT_USERS,
  LOGOUT,
  LOAD_ME,
  AUTH,
  GET_REGISTERED_COURSES,
  SET_ONLINE_USERS,
  SET_LAST_MESSAGE,
} from '@/store/constants/user';

export const register = (payload, onSuccess) => {
  return {
    type: REGISTER,
    onSuccess,
    payload,
  };
};

export const login = (payload, onSuccess, onError) => {
  return {
    type: LOGIN,
    onSuccess,
    onError,
    payload,
  };
};

export const logout = (payload, onSuccess) => {
  return {
    type: LOGOUT,
    onSuccess,
    payload,
  };
};

export const updateUser = (payload, onSuccess) => {
  return {
    type: UPDATE_USER,
    onSuccess,
    payload,
  };
};

export const getChatUsers = payload => {
  return {
    type: LOAD_CHAT_USERS,
    payload,
  };
};

export const loadMe = payload => {
  return {
    type: LOAD_ME,
    payload,
  };
};

export const auth = (payload, onSuccess, onError) => {
  return {
    type: AUTH,
    onSuccess,
    onError,
    payload,
  };
};

export const getRegisteredCourses = payload => {
  return {
    type: GET_REGISTERED_COURSES,
    payload,
  };
};

export const setOnlineUsers = payload => {
  return {
    type: SET_ONLINE_USERS,
    payload,
  };
};

export const setLastMessage = payload => {
  return {
    type: SET_LAST_MESSAGE,
    payload,
  };
};
