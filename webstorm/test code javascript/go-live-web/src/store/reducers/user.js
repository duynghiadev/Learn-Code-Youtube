import socketClient from '@/api/socketClient';
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOAD_ME,
  LOAD_ME_SUCCESS,
  LOAD_ME_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOAD_CHAT_USERS,
  LOAD_CHAT_USERS_SUCCESS,
  LOAD_CHAT_USERS_ERROR,
  LOGOUT_SUCCESS,
  AUTH,
  AUTH_SUCCESS,
  AUTH_ERROR,
  GET_REGISTERED_COURSES,
  GET_REGISTERED_COURSES_ERROR,
  GET_REGISTERED_COURSES_SUCCESS,
  SET_ONLINE_USERS,
  SET_LAST_MESSAGE,
} from '@/store/constants/user';
import { handleRequest, handleSuccess, handleError } from '@/utils/reducer';
import update from 'immutability-helper';
import { cloneDeep } from 'lodash';
import { SET_READ_MESSAGE_SOCKET } from '../constants/message';

const initialState = {
  authenticated: {
    requesting: false,
    success: false,
    user: {
      _id: '',
      username: '',
      email: '',
      password: '',
      avatarImage: '',
    },
  },

  contacts: {
    requesting: false,
    message: '',
    success: false,
    users: [],
  },

  userCourses: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },

  onlineUsers: [],
};

const handleUpdateContacts = (state, payload) => {
  const { from, to, message } = payload.payload;
  const {
    contacts: { users },
  } = state;

  const usersUpdated = cloneDeep(users);

  const index = usersUpdated.findIndex(
    user => user._id === from || user._id === to
  );

  if (index !== -1) {
    const foundElement = usersUpdated.splice(index, 1);
    foundElement[0].lastMessage.message.text = message;
    foundElement[0].lastMessage.sender = from;
    foundElement[0].lastMessage.createdAt = Date.now();
    foundElement[0].lastMessage.isRead = false;
    foundElement[0].lastMessage.readers = [from];
    usersUpdated.unshift(foundElement[0]);
  }

  return update(state, {
    contacts: {
      users: {
        $set: usersUpdated,
      },
    },
  });
};

const handleUpdateReadMessageSocket = (state, payload) => {
  const {
    contacts: { users },
  } = state;
  const { from, to } = payload.payload;
  const usersUpdate = users.map(user => {
    if (user._id === from) {
      user.lastMessage.isRead = true;
      user.lastMessage.readers = [...user.lastMessage.readers, to];
    }

    return user;
  });

  return update(state, {
    users: {
      $set: usersUpdate,
    },
  });
};

const userReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case LOAD_ME:
    case REGISTER:
    case LOGIN:
    case UPDATE_USER:
    case AUTH:
      return handleRequest(state, 'authenticated', payload);

    case LOAD_ME_SUCCESS:
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case AUTH_SUCCESS:
      const { user } = payload;
      socketClient.emit('add-user', user._id);
      return handleSuccess(state, 'authenticated', payload);

    case LOAD_ME_ERROR:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case UPDATE_USER_ERROR:
    case AUTH_ERROR:
      return handleError(state, 'authenticated', payload.message);

    case LOGOUT_SUCCESS:
      return initialState;

    case LOAD_CHAT_USERS:
      return handleRequest(state, 'contacts', payload);
    case LOAD_CHAT_USERS_SUCCESS:
      return handleSuccess(state, 'contacts', payload);
    case LOAD_CHAT_USERS_ERROR:
      return handleError(state, 'contacts', payload.message);

    case GET_REGISTERED_COURSES:
      return handleRequest(state, 'userCourses', payload);
    case GET_REGISTERED_COURSES_SUCCESS:
      return handleSuccess(state, 'userCourses', payload);
    case GET_REGISTERED_COURSES_ERROR:
      return handleError(state, 'userCourses', payload.message);

    case SET_ONLINE_USERS:
      return update(state, {
        onlineUsers: {
          $set: payload.payload,
        },
      });

    case SET_LAST_MESSAGE:
      return handleUpdateContacts(state, payload);

    case SET_READ_MESSAGE_SOCKET:
      return handleUpdateReadMessageSocket(state, payload);

    default:
      return state;
  }
};

export default userReducer;
