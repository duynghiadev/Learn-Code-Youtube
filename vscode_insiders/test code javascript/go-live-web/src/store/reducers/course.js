import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  GET_COURSE,
  GET_COURSE_SUCCESS,
  GET_COURSE_ERROR,
  GET_COURSE_GROUP,
  GET_COURSE_GROUP_SUCCESS,
  GET_COURSE_GROUP_ERROR,
  REGISTER_COURSE,
  REGISTER_COURSE_SUCCESS,
  REGISTER_COURSE_ERROR,
  OPEN_VIDEO,
  OPEN_VIDEO_SUCCESS,
  OPEN_VIDEO_ERROR,
  GET_COURSE_GROUP_BY_SLUG,
  GET_COURSE_GROUP_BY_SLUG_SUCCESS,
  GET_COURSE_GROUP_BY_SLUG_ERROR,
  GET_COURSES_FREE,
  GET_COURSES_FREE_ERROR,
  GET_COURSES_FREE_SUCCESS,
  GET_COURSES_PAID,
  GET_COURSES_PAID_ERROR,
  GET_COURSES_PAID_SUCCESS,
} from '@/store/constants/course';
import { handleRequest, handleSuccess, handleError } from '@/utils/reducer';
import update from 'immutability-helper';

const initialState = {
  courses: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },

  course: {
    requesting: false,
    success: false,
    message: '',
    data: {},
    isRegistered: false,
    status: undefined,
    tracks: [],
  },

  courseGroup: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },

  courseGroupData: [],

  coursesFree: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },

  coursesPaid: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },
};

const handleUpdateOpenVideo = (state, payload) => {
  const {
    data: { trackOpen, trackClose },
  } = payload;
  const {
    course: { tracks },
  } = state;

  const newTracks = tracks.map(track => {
    track.trackSteps = track.trackSteps.map(trackStep => {
      if (trackStep._id === trackOpen.video) {
        trackStep.info = trackOpen;
      }

      if (trackStep._id === trackClose.video) {
        trackStep.info = trackClose;
      }

      return trackStep;
    });

    return track;
  });

  return update(state, {
    course: {
      requesting: { $set: false },
      success: { $set: true },
      tracks: { $set: newTracks },
      trackClose: { $set: trackClose },
      trackOpen: { $set: trackOpen },
      trackWatching: { $set: trackOpen.video },
    },
  });
};

const handleRegisterCourse = (state, payload) => {
  const {
    course: { tracks },
  } = state;

  tracks[0].trackSteps[0].info = {
    status: 'watching',
    time: 0,
    isLastOpen: true,
  };

  return update(handleSuccess(state, 'course', payload), {
    course: {
      tracks: { $set: tracks },
    },
  });
};

const handleRequestCourseGroup = (state, payload) => {
  const {
    payload: { slug },
  } = payload;
  const { courseGroupData } = state;

  const courseGroupExisting = courseGroupData.find(
    courseGroup => courseGroup.slug === slug
  );

  let courseGroupDataNew = [];

  if (courseGroupExisting) {
    courseGroupDataNew = courseGroupData.map(courseGroup => {
      if (courseGroup.slug === slug) {
        courseGroup.requesting = true;
      }
      return courseGroup;
    });
  } else {
    const courseGroupRequesting = {
      requesting: true,
      slug: slug,
    };
    courseGroupDataNew = [...courseGroupData, courseGroupRequesting];
  }

  return update(state, {
    courseGroupData: {
      $set: courseGroupDataNew,
    },
  });
};

const handleRequestCourseGroupSuccess = (state, payload) => {
  const { data } = payload;
  const { courseGroupData } = state;
  const courseGroupDataNew = courseGroupData.map(courseGroup => {
    if (courseGroup.slug === data.slug) {
      return { requesting: false, ...data };
    }
    return courseGroup;
  });
  return update(state, {
    courseGroupData: {
      $set: courseGroupDataNew,
    },
  });
};

const handleRequestCourseGroupError = (state, payload) => {
  const { slug } = payload;
  const { courseGroupData } = state;
  const courseGroupDataNew = courseGroupData.map(courseGroup => {
    if (courseGroup.slug === slug) {
      return { ...courseGroup, requesting: false };
    }
    return courseGroup;
  });

  return update(state, {
    courseGroupData: {
      $set: courseGroupDataNew,
    },
  });
};

const courseReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case GET_COURSES:
      return handleRequest(state, 'courses', payload);
    case GET_COURSES_SUCCESS:
      return handleSuccess(state, 'courses', payload);
    case GET_COURSES_ERROR:
      return handleError(state, 'courses', payload.message);

    case GET_COURSE:
      return update(handleRequest(state, 'course', payload), {
        course: { isRegistered: { $set: false } },
      });
    case GET_COURSE_SUCCESS:
      return handleSuccess(state, 'course', payload);
    case GET_COURSE_ERROR:
      return handleError(state, 'course', payload.message);

    case REGISTER_COURSE:
      return handleRequest(state, 'course', payload);
    case REGISTER_COURSE_SUCCESS:
      return handleRegisterCourse(state, payload);
    case REGISTER_COURSE_ERROR:
      return handleError(state, 'course', payload.message);

    case OPEN_VIDEO:
      return handleRequest(state, 'course', payload);
    case OPEN_VIDEO_SUCCESS:
      return handleUpdateOpenVideo(state, payload);
    case OPEN_VIDEO_ERROR:
      return handleError(state, 'course', payload.message);

    case GET_COURSE_GROUP:
      return handleRequest(state, 'courseGroup', payload);
    case GET_COURSE_GROUP_SUCCESS:
      return handleSuccess(state, 'courseGroup', payload);
    case GET_COURSE_GROUP_ERROR:
      return handleError(state, 'courseGroup', payload.message);

    case GET_COURSE_GROUP_BY_SLUG:
      return handleRequestCourseGroup(state, payload);
    case GET_COURSE_GROUP_BY_SLUG_SUCCESS:
      return handleRequestCourseGroupSuccess(state, payload);
    case GET_COURSE_GROUP_BY_SLUG_ERROR:
      return handleRequestCourseGroupError(state, payload);

    case GET_COURSES_FREE:
      return handleRequest(state, 'coursesFree', payload);
    case GET_COURSES_FREE_SUCCESS:
      return handleSuccess(state, 'coursesFree', payload);
    case GET_COURSES_FREE_ERROR:
      return handleError(state, 'coursesFree', payload.message);

    case GET_COURSES_PAID:
      return handleRequest(state, 'coursesPaid', payload);
    case GET_COURSES_PAID_SUCCESS:
      return handleSuccess(state, 'coursesPaid', payload);
    case GET_COURSES_PAID_ERROR:
      return handleError(state, 'coursesPaid', payload.message);

    default:
      return state;
  }
};

export default courseReducer;
