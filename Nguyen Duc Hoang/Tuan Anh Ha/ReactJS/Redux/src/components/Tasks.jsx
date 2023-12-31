import { useSelector } from 'react-redux'
import Task from './Task'

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks)

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default Tasks
