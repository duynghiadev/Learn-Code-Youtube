import { createSelector } from 'reselect';

const selectNoteReducer = () => state => state.note;

const selectNotes = createSelector(
  selectNoteReducer(),
  substate => substate.notes
);

export { selectNotes };
