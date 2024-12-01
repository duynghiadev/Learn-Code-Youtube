import { ADD_TODO, DELETE_TODO, GET_TODOS, SAVE_TODOS } from "./types";

export const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      console.log("getting todos");
      const todos = localStorage.getItem("todos");
      if (todos) state = JSON.parse(todos);
      return state;

    case SAVE_TODOS:
      console.log("saving todos");
      localStorage.setItem("todos", JSON.stringify(payload.todos));
      return state;

    case ADD_TODO:
      return [...state, payload.todo];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};
