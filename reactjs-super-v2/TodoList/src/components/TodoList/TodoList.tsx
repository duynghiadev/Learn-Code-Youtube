import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export default function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        TodoList
        <TaskInput />
        <TaskList doneTaskList={true} />
        <TaskList doneTaskList={false} />
      </div>
    </div>
  )
}
