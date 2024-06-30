import { useState } from "react";
import { tasks as initialTasks } from "../data/tasks";

const Tasks = ({
  tasks,
  onToggle,
}: {
  tasks: typeof initialTasks;
  onToggle: (updatedTaskId: number) => void;
}) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              onToggle(task.id);
            }}
          />
          {task.name}
        </label>
      </li>
    ))}
  </ul>
);

const FriendTasks = () => {
  const [myTasks, setMyTasks] = useState(initialTasks);
  const [yourTasks, setYourTasks] = useState(initialTasks);

  const handleToggleMyTask = (updatedTaskId: number) => {
    setMyTasks(
      myTasks.map((task) => {
        if (task.id === updatedTaskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  };

  const handleToggleYourTask = (updatedTaskId: number) => {
    setYourTasks(
      yourTasks.map((task) =>
        task.id === updatedTaskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <>
      <h1>Tasks</h1>
      <h2>My tasks:</h2>
      <Tasks tasks={myTasks} onToggle={handleToggleMyTask} />
      <h2>Your tasks:</h2>
      <Tasks tasks={yourTasks} onToggle={handleToggleYourTask} />
    </>
  );
};

export default FriendTasks;
