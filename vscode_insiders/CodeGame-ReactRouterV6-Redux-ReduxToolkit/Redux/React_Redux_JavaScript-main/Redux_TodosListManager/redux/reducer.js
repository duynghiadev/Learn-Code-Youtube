import { combineReducers } from "redux";

const initialState = {
  todos: []
}
const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return [
        ...state,
      {
        title: action.payload,
        done: false,
      }
      ];
  } else if (action.type === "TODO_TOGGLED") {
    return state.map((todo) =>
    todo.title === action.payload ? {...todo, done: !todo.done} : todo
    );
  } else if (action.type === "REMOVE_TODO") {
    return state.filter((todo) => todo.title !== action.payload);
  }
  // else if (action.type === "REMOVE_TODO_2S") {
  //   const id = setInterval(() => {
  //   dispatch(remove());
  // }, 2000);
  // }
    return state;
};

export default combineReducers({
  todos :todosReducer,
  list,
});


