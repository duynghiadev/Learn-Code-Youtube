import { call, put, takeLatest } from 'redux-saga/effects';

import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOAD_CHAT_USERS,
  LOAD_CHAT_USERS_SUCCESS,
  LOAD_CHAT_USERS_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOAD_ME,
  LOAD_ME_SUCCESS,
  LOAD_ME_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH,
  GET_REGISTERED_COURSES,
  GET_REGISTERED_COURSES_ERROR,
  GET_REGISTERED_COURSES_SUCCESS,
} from '@/store/constants/user';
import userApi from '@/api/userApi';
import { removeToken, setToken } from '@/utils/token';
export default [userSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case REGISTER:
      yield call(register, payload);
      break;
    case LOGIN:
      yield call(login, payload);
      break;
    case UPDATE_USER:
      yield call(updateUser, payload);
      break;
    case LOAD_CHAT_USERS:
      yield call(getChatUsers, payload);
      break;
    case LOAD_ME:
      yield call(loadMe, payload);
      break;
    case LOGOUT:
      yield call(logout, payload);
      break;
    case AUTH:
      yield call(auth, payload);
      break;
    case GET_REGISTERED_COURSES:
      yield call(getRegisteredCourses, payload);
      break;
    default:
      break;
  }
}

function* register({ payload, onSuccess }) {
  const { username, email, password, firstName, lastName } = payload;

  const body = {
    username,
    email,
    password,
    firstName,
    lastName,
  };

  try {
    const data = yield userApi.register(body);

    if (!data.success) {
      yield put({ type: REGISTER_ERROR, ...data });
      yield removeToken();
    } else {
      yield put({ type: REGISTER_SUCCESS, ...data });
      yield setToken(data.user.token, data.user);
      onSuccess();
    }

    return data;
  } catch (error) {
    yield removeToken();
    yield put({ type: REGISTER_ERROR, error: error });
    return error;
  }
}

function* login({ payload, onSuccess, onError }) {
  const { username, password, codeOtp = '' } = payload;

  const body = {
    username,
    password,
  };

  if (codeOtp) {
    body.codeOtp = codeOtp;
  }

  try {
    const data = yield userApi.login(body);

    if (!data.success) {
      yield put({ type: LOGIN_ERROR, ...data });
      yield removeToken();
      onError(data);
    } else {
      yield put({ type: LOGIN_SUCCESS, ...data });
      yield setToken(data.user.token, data.user);
      onSuccess();
    }
    return data;
  } catch (error) {
    yield removeToken();
    yield put({ type: LOGIN_ERROR, error: error });
    return error;
  }
}

function* updateUser({ payload, onSuccess }) {
  try {
    const data = yield userApi.updateUser(payload);
    if (!data.success) {
      yield put({ type: UPDATE_USER_ERROR, ...data });
    } else {
      yield put({ type: UPDATE_USER_SUCCESS, ...data });
      onSuccess();
    }

    return data;
  } catch (error) {
    yield put({ type: UPDATE_USER_ERROR, error: error });
    return error;
  }
}

function* getChatUsers({ payload }) {
  try {
    const data = yield userApi.getChatUsers(payload);
    if (!data.success) {
      yield put({ type: LOAD_CHAT_USERS_ERROR, ...data });
    } else {
      yield put({ type: LOAD_CHAT_USERS_SUCCESS, ...data });
    }
  } catch (error) {
    yield put({ type: LOAD_CHAT_USERS_ERROR, error: error });
    return error;
  }
}

function* logout({ payload, onSuccess }) {
  try {
    const { userId } = payload;
    const data = yield userApi.logout(userId);
    if (data?.success) {
      yield put({ type: LOGOUT_SUCCESS, ...data });
      yield call(removeToken);
      onSuccess();
    } else {
      yield put({ type: LOGIN_ERROR, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: LOGOUT_ERROR, error: error });
    return error;
  }
}

function* loadMe() {
  try {
    const data = yield userApi.getMe();

    if (data?.success) {
      yield put({ type: LOAD_ME_SUCCESS, ...data });
      yield setToken(data.user.token, data.user);
    } else {
      yield removeToken();
      yield put({ type: LOAD_ME_ERROR, ...data });
    }

    return data;
  } catch (error) {
    yield removeToken();
    yield put({ type: LOAD_ME_ERROR, error: error });
    return error;
  }
}

function* auth({ payload, onSuccess, onError }) {
  const { token, codeOtp } = payload;
  try {
    const data = yield userApi.auth({ token, codeOtp });
    if (data?.success) {
      yield put({ type: AUTH_SUCCESS, ...data });
      yield setToken(data.user.token, data.user);
      onSuccess();
    } else {
      yield removeToken();
      yield put({ type: AUTH_ERROR, ...data });
      onError(data);
    }

    return data;
  } catch (error) {
    yield removeToken();
    yield put({ type: AUTH_ERROR, error: error });
    return error;
  }
}

function* getRegisteredCourses({ payload }) {
  try {
    const data = yield userApi.getRegisteredCourses(payload);

    if (!data.success) {
      yield put({ type: GET_REGISTERED_COURSES_ERROR, ...data });
    } else {
      yield put({ type: GET_REGISTERED_COURSES_SUCCESS, ...data });
    }
  } catch (error) {
    yield put({ type: GET_REGISTERED_COURSES_ERROR, error: error });
    return error;
  }
}

export function* userSagas() {
  yield takeLatest(
    [
      REGISTER,
      LOGIN,
      UPDATE_USER,
      LOAD_CHAT_USERS,
      LOGOUT,
      LOAD_ME,
      AUTH,
      GET_REGISTERED_COURSES,
    ],
    startRequest
  );
}
