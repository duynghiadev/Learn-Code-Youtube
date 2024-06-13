import { call, all, put, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
  GET_COURSE,
  GET_COURSE_ERROR,
  GET_COURSE_SUCCESS,
  GET_COURSE_GROUP,
  GET_COURSE_GROUP_SUCCESS,
  GET_COURSE_GROUP_ERROR,
  REGISTER_COURSE,
  REGISTER_COURSE_ERROR,
  REGISTER_COURSE_SUCCESS,
  OPEN_VIDEO,
  OPEN_VIDEO_SUCCESS,
  OPEN_VIDEO_ERROR,
  GET_COURSE_GROUP_BY_SLUG,
  GET_COURSE_GROUP_BY_SLUG_SUCCESS,
  GET_COURSE_GROUP_BY_SLUG_ERROR,
  GET_COURSES_FREE,
  GET_COURSES_FREE_SUCCESS,
  GET_COURSES_FREE_ERROR,
  GET_COURSES_PAID,
  GET_COURSES_PAID_SUCCESS,
  GET_COURSES_PAID_ERROR,
} from '@/store/constants/course';
import courseApi from '@/api/courseApi';
import videoApi from '@/api/videoApi';
import { getCourseGroupBySlug as getCourseGroupBySlugAction } from '@/store/actions/course';

export default [courseSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case GET_COURSES:
      yield call(getCourses, payload);
      break;
    case GET_COURSE:
      yield call(getCourse, payload);
      break;
    case GET_COURSE_GROUP:
      yield call(getCourseGroup, payload);
      break;
    case REGISTER_COURSE:
      yield call(registerCourse, payload);
      break;
    case OPEN_VIDEO:
      yield call(openVideo, payload);
      break;
    case GET_COURSE_GROUP_BY_SLUG:
      yield call(getCourseGroupBySlug, payload);
      break;
    case GET_COURSES_FREE:
      yield call(getCoursesFree, payload);
      break;
    case GET_COURSES_PAID:
      yield call(getCoursesPaid, payload);
      break;
    default:
      break;
  }
}

function* getCourses(_payload) {
  try {
    const data = yield courseApi.getCourses();
    if (!data.success) {
      yield put({ type: GET_COURSES_ERROR, ...data });
    } else {
      yield put({ type: GET_COURSES_SUCCESS, ...data });
    }

    return data;
  } catch (error) {
    yield put({ type: GET_COURSES_ERROR, error: error });
    return error;
  }
}

function* getCourseGroup(_payload) {
  try {
    const data = yield courseApi.getCourseGroup();
    if (!data.success) {
      yield put({ type: GET_COURSE_GROUP_ERROR, ...data });
    } else {
      yield put({ type: GET_COURSE_GROUP_SUCCESS, ...data });
      if (data?.data.length > 0)
        yield all(
          data?.data.map(item =>
            put(getCourseGroupBySlugAction({ slug: item.slug }))
          )
        );
    }
    return data;
  } catch (error) {
    yield put({ type: GET_COURSE_GROUP_ERROR, error: error });
    return error;
  }
}

function* getCourseGroupBySlug({ payload }) {
  const { slug } = payload;
  try {
    const data = yield call(courseApi.getCourseGroupBySlug, slug);
    if (!data.success) {
      yield put({ type: GET_COURSE_GROUP_BY_SLUG_ERROR, ...data, slug });
    } else {
      yield put({ type: GET_COURSE_GROUP_BY_SLUG_SUCCESS, ...data, slug });
    }
    return data;
  } catch (error) {
    yield put({ type: GET_COURSE_GROUP_BY_SLUG_ERROR, error: error, slug });
    return error;
  }
}

function* getCourse({ payload }) {
  const { idOrSlug } = payload;

  try {
    const data = yield courseApi.getCourse(idOrSlug);
    if (!data.success) {
      yield put({ type: GET_COURSE_ERROR, ...data });
    } else {
      yield put({ type: GET_COURSE_SUCCESS, ...data });
    }

    return data;
  } catch (error) {
    yield put({ type: GET_COURSE_ERROR, error: error });
    return error;
  }
}

function* registerCourse({ payload }) {
  const { id } = payload;

  try {
    const data = yield courseApi.registerCourse(id);
    if (!data.success) {
      yield put({ type: REGISTER_COURSE_ERROR, ...data });
    } else {
      yield put({ type: REGISTER_COURSE_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: REGISTER_COURSE_ERROR, error: error });
    return error;
  }
}

function* openVideo({ payload }) {
  const { id, courseId, time } = payload;
  try {
    const data = yield videoApi.openVideo(id, { courseId, time });
    if (!data.success) {
      yield put({ type: OPEN_VIDEO_ERROR, ...data });
    } else {
      yield put({ type: OPEN_VIDEO_SUCCESS, ...data });
    }

    return data;
  } catch (error) {
    yield put({ type: OPEN_VIDEO_ERROR, error: error });
    return error;
  }
}

function* getCoursesFree({ payload }) {
  try {
    const data = yield courseApi.getCoursesFree();
    if (!data.success) {
      yield put({ type: GET_COURSES_FREE_ERROR, ...data });
    } else {
      yield put({ type: GET_COURSES_FREE_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: GET_COURSES_FREE_ERROR, error: error });
    return error;
  }
}

function* getCoursesPaid({ payload }) {
  try {
    const data = yield courseApi.getCoursesPaid();
    if (!data.success) {
      yield put({ type: GET_COURSES_PAID_ERROR, ...data });
    } else {
      yield put({ type: GET_COURSES_PAID_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    yield put({ type: GET_COURSES_PAID_ERROR, error: error });
    return error;
  }
}

export function* courseSagas() {
  yield takeEvery(
    [GET_COURSE_GROUP_BY_SLUG, GET_COURSES_FREE, GET_COURSES_PAID],
    startRequest
  );
  yield takeLatest(
    [GET_COURSES, GET_COURSE, GET_COURSE_GROUP, REGISTER_COURSE, OPEN_VIDEO],
    startRequest
  );
}
