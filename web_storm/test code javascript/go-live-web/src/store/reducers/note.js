import {
  GET_NOTE,
  GET_NOTE_SUCCESS,
  GET_NOTE_ERROR,
  CREATE_NOTE,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR,
} from '@/store/constants/note';
import { handleRequest, handleSuccess, handleError } from '@/utils/reducer';
import update from 'immutability-helper';

const initialState = {
  notes: {
    requesting: false,
    message: '',
    success: false,
    data: [],
  },
};

const handleCreateNote = (state, payload) => {
  const { data } = payload;
  const { notes } = state;
  return update(state, {
    notes: {
      requesting: { $set: false },
      success: { $set: true },
      data: { $set: [...notes.data, data] },
    },
  });
};

const userReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case GET_NOTE:
      return handleRequest(state, 'notes', payload);
    case GET_NOTE_SUCCESS:
      return handleSuccess(state, 'notes', payload);
    case GET_NOTE_ERROR:
      return handleError(state, 'notes', payload.message);

    case CREATE_NOTE:
      return handleRequest(state, 'notes', payload);
    case CREATE_NOTE_SUCCESS:
      return handleCreateNote(state, payload);
    case CREATE_NOTE_ERROR:
      return handleError(state, 'notes', payload.message);

    default:
      return state;
  }
};

export default userReducer;
