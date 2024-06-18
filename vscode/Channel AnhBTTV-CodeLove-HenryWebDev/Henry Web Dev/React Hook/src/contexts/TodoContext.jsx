import { createContext, useEffect, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    });
  }, [todos]);

  const todoContextData = {
    todos,
    dispatch,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
