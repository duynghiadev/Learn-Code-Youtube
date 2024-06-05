import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "viec 1",
      completed: false,
    },
    {
      id: 2,
      title: "viec 2",
      completed: true,
    },
    {
      id: 3,
      title: "viec 3",
      completed: false,
    },
  ]);

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
