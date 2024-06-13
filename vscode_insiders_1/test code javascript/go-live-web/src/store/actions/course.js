import {
  GET_COURSE_GROUP,
  GET_COURSES,
  GET_COURSE,
  REGISTER_COURSE,
  OPEN_VIDEO,
  GET_COURSE_GROUP_BY_SLUG,
  GET_COURSES_FREE,
  GET_COURSES_PAID,
} from '@/store/constants/course';

const getCourses = payload => {
  return {
    type: GET_COURSES,
    payload,
  };
};

const getCourseGroup = payload => {
  return {
    type: GET_COURSE_GROUP,
    payload,
  };
};

const getCourse = payload => {
  return {
    type: GET_COURSE,
    payload,
  };
};

const registerCourse = payload => {
  return {
    type: REGISTER_COURSE,
    payload,
  };
};

const openVideo = payload => {
  return {
    type: OPEN_VIDEO,
    payload,
  };
};

const getCourseGroupBySlug = payload => {
  return {
    type: GET_COURSE_GROUP_BY_SLUG,
    payload,
  };
};

const getCoursesFree = payload => {
  return {
    type: GET_COURSES_FREE,
    payload,
  };
};

const getCoursesPaid = payload => {
  return {
    type: GET_COURSES_PAID,
    payload,
  };
};

export {
  getCourses,
  getCourse,
  getCourseGroup,
  registerCourse,
  openVideo,
  getCourseGroupBySlug,
  getCoursesFree,
  getCoursesPaid,
};
