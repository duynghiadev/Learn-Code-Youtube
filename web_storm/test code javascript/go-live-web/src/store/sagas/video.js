import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_VIDEO_BY_ID,
  GET_VIDEO_BY_ID_SUCCESS,
  GET_VIDEO_BY_ID_ERROR,
} from '@/store/constants/video';
import videoApi from '@/api/videoApi';

export default [videoSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case GET_VIDEO_BY_ID:
      yield call(getVideoById, payload);
      break;
    default:
      break;
  }
}

function* getVideoById({ payload }) {
  const { id } = payload;

  try {
    const data = yield videoApi.getVideoById(id);
    if (!data.success) {
      yield put({ type: GET_VIDEO_BY_ID_ERROR, ...data });
    } else {
      yield put({ type: GET_VIDEO_BY_ID_SUCCESS, ...data });
    }

    return data;
  } catch (error) {
    yield put({ type: GET_VIDEO_BY_ID_ERROR, error: error });
    return error;
  }
}

export function* videoSagas() {
  yield takeLatest([GET_VIDEO_BY_ID], startRequest);
}
