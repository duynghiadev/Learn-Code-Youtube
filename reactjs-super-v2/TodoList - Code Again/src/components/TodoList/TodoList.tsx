import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useEffect, useState } from 'react'
import { Todo } from '../../@types/todo.type'

// interface HandleNewTodos {
//   (todos: Todo[]): Todo[]
// }

type HandleNewTodos = {
  (todos: Todo[]): Todo[]
}

const syncReactToLocal = (handleNewTodos: HandleNewTodos) => {
  const todosString = localStorage.getItem('todos_version_2')
  const todosObj: Todo[] = JSON.parse(todosString || '[]')
  const newTodoObj = handleNewTodos(todosObj)
  localStorage.setItem('todos_version_2', JSON.stringify(newTodoObj))
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todos) => !todos.done)

  useEffect(() => {
    const todosString = localStorage.getItem('todos_version_2')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    setTodos(todosObj)
  }, [])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
    syncReactToLocal((todosObj: Todo[]) => [...todosObj, todo])
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
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
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
    syncReactToLocal(handler)
  }

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }

    const handler = (todoObj: Todo[]) => {
      const findedIndexTodo = todoObj.findIndex((todo) => todo.id === id)
      if (findedIndexTodo > -1) {
        const result = [...todoObj]
        result.splice(findedIndexTodo, 1)
        return result
      }
      return todoObj
    }
    setTodos(handler)
    syncReactToLocal(handler)
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
