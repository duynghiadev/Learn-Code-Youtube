import { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Viec 1" },
    { id: 2, title: "Viec 2" },
    { id: 3, title: "Viec 3" },
  ]);

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
