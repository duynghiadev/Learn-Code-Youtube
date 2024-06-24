import { CREATE_NOTE, GET_NOTE } from '../constants/note';

const getNote = payload => {
  return {
    type: GET_NOTE,
    payload,
  };
};

const createNote = payload => {
  return {
    type: CREATE_NOTE,
    payload,
  };
};

export { getNote, createNote };
