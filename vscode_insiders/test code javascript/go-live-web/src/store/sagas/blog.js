import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ALL_BLOG,
  GET_ALL_BLOG_ERROR,
  GET_ALL_BLOG_SUCCESS,
} from '@/store/constants/blog';
import blogApi from '@/api/blogApi';

export default [blogSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case GET_ALL_BLOG:
      yield call(getAllBlog, payload);
      break;
    default:
      break;
  }
}

function* getAllBlog({ payload }) {
  const { page, limit } = payload;
  try {
    const data = yield blogApi.getAllBlog(page, limit);

    if (!data?.success) {
      yield put({ type: GET_ALL_BLOG_ERROR, ...data });
    } else {
      yield put({ type: GET_ALL_BLOG_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: GET_ALL_BLOG_ERROR });
    return error;
  }
}

export function* blogSagas() {
  yield takeLatest([GET_ALL_BLOG], startRequest);
}
