import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/features/tasks/taskSlice'

const Task = ({ task }) => {
  const dispatch = useDispatch()

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <h3>{task.text}</h3>
      <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
    </div>
  )
}

export default Task
