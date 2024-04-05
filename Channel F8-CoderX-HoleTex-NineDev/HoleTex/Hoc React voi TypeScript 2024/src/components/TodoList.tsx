import { TodoType } from '../App'
import Todo from './Todo'

const TodoList = ({
  todoList,
  updateIsCompleted
}: {
  todoList: TodoType[]
  updateIsCompleted: (todoId: string) => void
}) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo
            todoId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateIsCompleted={updateIsCompleted}
          />
        )
      })}
    </div>
  )
}

export default TodoList
