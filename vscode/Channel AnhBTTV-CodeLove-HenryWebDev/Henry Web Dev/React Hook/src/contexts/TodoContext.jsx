import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //  state
  const [todos, setTodos] = useState([]);

  // useEffect
  useEffect(() => {
    console.log("getting todos");
    const todos = localStorage.getItem("todos");
    if (todos) setTodos(JSON.parse(todos));
  }, []);

  // useEffect
  useEffect(() => {
    console.log("saving todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoContextData = {
    todos,
    addTodo,
    deleteTodo,
  };

  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
