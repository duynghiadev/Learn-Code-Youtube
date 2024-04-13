import { useContext } from 'react'
import { TodoListContext } from '../context/TodoListContext'

export const TodoList = () => {
  const { todoList, removeTodoItem, markAsCompleted } = useContext(TodoListContext)

  return (
    <ul>
      {todoList.map((todoItem) => (
        <li
          className={`todoItem ${todoItem.completed ? 'completed' : ''}`}
          key={todoItem.id}
          onClick={() => markAsCompleted(todoItem.id)}
        >
          {todoItem.label}
          <button className='delete' onClick={() => removeTodoItem(todoItem.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
