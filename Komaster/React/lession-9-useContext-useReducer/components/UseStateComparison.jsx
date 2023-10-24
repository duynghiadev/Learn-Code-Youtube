
import { useState } from "react";
import { initialState } from "../store";

function Todos() {
  const [state, setState] = useState(initialState);

  const handleComplete = (currentTodo) => {
    setState((state) => {
      return state.map((todo) => {
        if (todo.id === currentTodo.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    });
  };




  return (
    <div className="container-md box">
      {state.map((todo) => (
        <div className="todo" key={todo.id}>
          <input type="checkbox" checked={todo.complete} 
            onChange={() => handleComplete(todo)} />
          <label>{todo.title}</label>
        </div>
      ))}
    </div>
  );
}

export default Todos;




