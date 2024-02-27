import { createSelector } from 'reselect';

const selectMessageReducer = () => state => state.message;

export const selectInfo = createSelector(
  selectMessageReducer(),
  substate => substate.info
);
export const selectInfoMessages = createSelector(
  selectMessageReducer(),
  substate => substate.info_messages
);

const selectMessage = createSelector(
  selectInfo,
  selectInfoMessages,

  selectInfo => ({
    selectInfo,
    selectInfoMessages,
  })
);

export default selectMessage;
