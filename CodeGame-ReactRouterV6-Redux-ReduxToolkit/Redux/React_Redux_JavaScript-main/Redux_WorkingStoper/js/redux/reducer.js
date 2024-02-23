import { combineReducers } from "redux";

const list = (state = [], action) => {
  if (action.type === "SAVE") {
    return [...state, action.lap];
  } else if (action.type === "REMOVE") {
    const copy = [...state];
    copy.splice(action.idx, 1);
    return copy;
  }
  return state;
};

const counter = (
  state = {
    value: 0,
    isCounting: false,
    id: null,
  },
  action
) => {
  if (action.type === "START") {
    return {
      ...state,
      isCounting: true,
      id: action.id,
    };
  } else if (action.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "STOP") {
    clearInterval(state.id);
    return {
      ...state,
      isCounting: false,
      id: null,
    };
  } else if (action.type === "INIT") {
    clearInterval(state.id);
    return {
      ...state,
      value: action.value,
    };
  }
  return state;
};

export default combineReducers({
  counter,
  list,
});
