import { fork, all } from 'redux-saga/effects';
import userSagas from './user';
import messageSagas from './message';
import courseSagas from './course';
import videoSagas from './video';
import noteSagas from './note';
import blogSagas from './blog';

const rootSagas = function* () {
  yield all([
    fork(...userSagas),
    fork(...messageSagas),
    fork(...courseSagas),
    fork(...videoSagas),
    fork(...noteSagas),
    fork(...blogSagas),
  ]);
};

export default rootSagas;
