import {
  SEND_MESSAGE,
  GET_MESSAGES,
  ADD_MESSAGE_SOCKET,
  READ_MESSAGES,
  SET_READ_MESSAGE_SOCKET,
} from '@/store/constants/message';

export const sendMessage = payload => {
  return {
    type: SEND_MESSAGE,
    payload,
  };
};

export const getMessages = payload => {
  return {
    type: GET_MESSAGES,
    payload,
  };
};

export const addMessageSocket = payload => {
  return {
    type: ADD_MESSAGE_SOCKET,
    payload,
  };
};

export const readMessages = payload => {
  return {
    type: READ_MESSAGES,
    payload,
  };
};

export const setReadMessagesSocket = payload => {
  return {
    type: SET_READ_MESSAGE_SOCKET,
    payload,
  };
};
