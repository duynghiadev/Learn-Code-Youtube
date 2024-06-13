import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useEffect, useState } from 'react'
import { Todo } from '../../@types/todo.type'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)

  // Load todos from local storage when component mounts
  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos_version_2') || '[]')
    setTodos(todosFromLocalStorage)
  }, [])

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos_version_2', JSON.stringify(todos))
  }, [todos])

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

  const startEditTodo = (id: string) => {
    const foundTodo = todos.find((todo) => todo.id === id)
    if (foundTodo) {
      setCurrentTodo(foundTodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prevState) => {
      if (prevState) return { ...prevState, name }
      return null
    })
  }

  const finishEditTodo = () => {
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    }
    setTodos(handler)
    setCurrentTodo(null)
  }

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }

    const handler = (todoObj: Todo[]) => {
      const foundIndex = todoObj.findIndex((todo) => todo.id === id)
      if (foundIndex > -1) {
        const result = [...todoObj]
        result.splice(foundIndex, 1)
        return result
      }
      return todoObj
    }
    setTodos(handler)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList
          doneTaskList={false}
          todos={notdoneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList={true}
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default TodoList
