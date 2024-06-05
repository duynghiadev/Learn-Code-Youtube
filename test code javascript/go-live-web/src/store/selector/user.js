import { createSelector } from 'reselect';

const selectUserReducer = () => state => state.user;

export const selectUserInfo = createSelector(
  selectUserReducer(),
  substate => substate.authenticated.user
);

export const selectIsLogin = createSelector(
  selectUserReducer(),
  substate => substate.authenticated.success
);

export const selectUserRequesting = createSelector(
  selectUserReducer(),
  substate => substate.authenticated.requesting
);

export const selectUserCourseRequesting = createSelector(
  selectUserReducer(),
  substate => substate.userCourses.requesting
);

export const selectContacts = createSelector(
  selectUserReducer(),
  substate => substate.contacts
);

export const selectAuthenticated = createSelector(
  selectUserReducer(),
  substate => substate.authenticated
);

export const selectUserCourses = createSelector(
  selectUserReducer(),
  substate => substate.userCourses.data
);

export const selectOnlineUsers = createSelector(
  selectUserReducer(),
  substate => substate.onlineUsers
);

const selectUser = createSelector(
  selectAuthenticated,
  selectContacts,
  selectUserCourses,

  (selectAuthenticated, selectContacts, selectUserCourses) => ({
    selectAuthenticated,
    selectContacts,
    selectUserCourses,
  })
);

export default selectUser;
