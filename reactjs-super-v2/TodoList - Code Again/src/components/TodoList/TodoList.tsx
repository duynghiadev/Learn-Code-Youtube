import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useState } from 'react'
import { Todo } from '../../@types/todo.type'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todos) => !todos.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  console.log('todos:', todos)

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} todos={notdoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList doneTaskList={true} todos={doneTodos} handleDoneTodo={handleDoneTodo} />
      </div>
    </div>
  )
}

export default TodoList
