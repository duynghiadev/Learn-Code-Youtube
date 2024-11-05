import { createSelector } from 'reselect';

const selectCourseReducer = () => state => state.course;

const selectCourse = createSelector(
  selectCourseReducer(),
  substate => substate.course
);
const selectCourses = createSelector(
  selectCourseReducer(),
  substate => substate.courses
);
const selectCourseGroup = createSelector(
  selectCourseReducer(),
  substate => substate.courseGroup
);

const selectCourseIsRegistered = createSelector(
  selectCourseReducer(),
  substate => substate.course.isRegistered
);

const selectCourseGroupData = createSelector(
  selectCourseReducer(),
  substate => substate.courseGroupData
);

const selectCoursesFree = createSelector(
  selectCourseReducer(),
  substate => substate.coursesFree
);

const selectCoursesPaid = createSelector(
  selectCourseReducer(),
  substate => substate.coursesPaid
);

export {
  selectCourse,
  selectCourses,
  selectCourseGroup,
  selectCourseIsRegistered,
  selectCourseGroupData,
  selectCoursesFree,
  selectCoursesPaid,
};
