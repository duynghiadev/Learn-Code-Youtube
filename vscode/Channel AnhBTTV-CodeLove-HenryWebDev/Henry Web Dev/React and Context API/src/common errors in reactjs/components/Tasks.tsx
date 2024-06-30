import { tasks } from "../data/tasks";
import { useState } from "react";

const Tasks = () => {
  const [index, setIndex] = useState(0);
  const currentTask = tasks[index];

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <div className="App">
      <h1>Tasks</h1>
      <h2>Current task</h2>
      <h3>{currentTask.name}</h3>
      <button onClick={handleClick}>Next Task</button>
    </div>
  );
};

export default Tasks;
