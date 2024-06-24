import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  READ_MESSAGES,
  READ_MESSAGES_SUCCESS,
  READ_MESSAGES_ERROR,
} from '@/store/constants/message';
import messageApi from '@/api/messageApi';
import socketClient from '@/api/socketClient';

export default [messageSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case SEND_MESSAGE:
      yield call(sendMessage, payload);
      break;
    case GET_MESSAGES:
      yield call(getMessages, payload);
      break;
    case READ_MESSAGES:
      yield call(readMessages, payload);
      break;
    default:
      break;
  }
}

function* sendMessage({ payload }) {
  try {
    const { to, message } = payload;
    const data = yield messageApi.send({ to, message });

    if (!data.success) {
      yield put({ type: SEND_MESSAGE_ERROR, ...data });
    } else {
      yield put({ type: SEND_MESSAGE_SUCCESS, ...data, addMessage: message });
    }

    return data;
  } catch (error) {
    yield put({ type: SEND_MESSAGE_ERROR, error: error });
    return error;
  }
}

function* getMessages({ payload }) {
  try {
    const { to } = payload;
    const data = yield messageApi.get({ to });

    if (!data.success) {
      yield put({ type: GET_MESSAGES_ERROR, ...data });
    } else {
      yield put({ type: GET_MESSAGES_SUCCESS, ...data });
    }

    return data;
  } catch (error) {
    yield put({ type: GET_MESSAGES_ERROR, error: error });
    return error;
  }
}

function* readMessages({ payload }) {
  try {
    const { from, to } = payload;
    const data = yield messageApi.read({ from, to });
    if (!data.success) {
      yield put({ type: READ_MESSAGES_ERROR });
    } else {
      yield put({ type: READ_MESSAGES_SUCCESS, from, to });
      socketClient.emit('read-msg', { from, to });
    }

    return data;
  } catch (error) {
    yield put({ type: READ_MESSAGES_ERROR, error: error });
    return error;
  }
}

export function* messageSagas() {
  yield takeLatest([SEND_MESSAGE, GET_MESSAGES], startRequest);
  yield takeEvery([READ_MESSAGES], startRequest);
}
