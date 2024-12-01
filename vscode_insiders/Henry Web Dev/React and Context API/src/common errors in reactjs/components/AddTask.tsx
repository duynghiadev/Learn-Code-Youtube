import { useState } from "react";

let nextId = 0;

const AddTask = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState<Array<{ id: number; name: string }>>([]);

  const handleClick = () => {
    setTasks([...tasks, { id: nextId++, name }]);
  };

  return (
    <>
      <h1>Tasks:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <button onClick={handleClick}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AddTask;
