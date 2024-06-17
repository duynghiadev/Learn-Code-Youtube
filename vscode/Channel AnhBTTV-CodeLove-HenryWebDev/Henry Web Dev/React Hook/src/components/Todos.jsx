import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { AuthContext } from "../contexts/AuthContext";

const Todos = () => {
  // load todos context
  const { todos } = useContext(TodoContext);

  // load auth context
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorised</p>
      )}
    </div>
  );
};

export default Todos;
