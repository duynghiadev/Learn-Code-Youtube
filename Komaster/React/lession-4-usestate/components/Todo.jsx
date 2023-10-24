import { useState } from "react";
import { todos as data } from "../data";

function Todo() {
  const [todos, setTodos] = useState(data);

  const onAdd = () => {
    setTodos([...todos, ...["Learn Nodejs"]]);
  };

  const onEdit = (index) => {
    const updatedTodo = todos.slice();
    updatedTodo[index] = `Updated ${updatedTodo[index]}`;
    setTodos(updatedTodo);
  };

  const onDel = (index) => {
    setTodos((prevTodos) =>
      prevTodos.filter((t, oldIndex) => oldIndex !== index)
    );
  };

  return (
    <div className="container">
      <button className="btn" onClick={onAdd}>
        Add todo
      </button>
      {todos.map((todo, index) => {
        return (
          <div key={index} className="todo">
            <span>{todo}</span>
            <div className="todo-action">
              <button onClick={() => onEdit(index)} className="btn">
                Edit
              </button>
              <button onClick={() => onDel(index)} className="btn-delete">
                Del
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
