import { createSelector } from 'reselect';

const selectVideoReducer = () => state => state.video;

const selectVideo = createSelector(
  selectVideoReducer(),
  substate => substate.video
);

export { selectVideo };
