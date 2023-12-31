import { useSelector } from 'react-redux'

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks)

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
