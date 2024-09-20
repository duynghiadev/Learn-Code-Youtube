import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_NOTE,
  GET_NOTE_ERROR,
  GET_NOTE_SUCCESS,
  CREATE_NOTE,
  CREATE_NOTE_ERROR,
  CREATE_NOTE_SUCCESS,
} from '@/store/constants/note';
import noteApi from '@/api/noteApi';

export default [courseSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case GET_NOTE:
      yield call(getNote, payload);
      break;
    case CREATE_NOTE:
      yield call(createNote, payload);
      break;
    default:
      break;
  }
}

function* getNote({ payload }) {
  try {
    const data = yield noteApi.getNote(payload);
    if (!data?.success) {
      yield put({ type: GET_NOTE_ERROR, ...data });
    } else {
      yield put({ type: GET_NOTE_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: GET_NOTE_ERROR });
    return error;
  }
}

function* createNote({ payload }) {
  try {
    const data = noteApi.createNote(payload);
    if (!data?.success) {
      yield put({ type: CREATE_NOTE_ERROR, ...data });
    } else {
      yield put({ type: CREATE_NOTE_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: CREATE_NOTE_ERROR });
    return error;
  }
}

export function* courseSagas() {
  yield takeLatest([GET_NOTE, CREATE_NOTE], startRequest);
}
