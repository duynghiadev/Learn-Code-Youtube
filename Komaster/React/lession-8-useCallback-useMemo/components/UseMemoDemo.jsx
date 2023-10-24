import { useState, useMemo } from "react";
import expensiveCalculation from "./ExpensiveCalculation.js";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => {
    return expensiveCalculation(count)
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div className="use-memo-demo container">
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo} className="btn">
        Add Todo
      </button>

      <p>Count: {count}</p>
      <button onClick={increment} className="btn">
        +
      </button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
  );
};

export default UseMemoDemo;
