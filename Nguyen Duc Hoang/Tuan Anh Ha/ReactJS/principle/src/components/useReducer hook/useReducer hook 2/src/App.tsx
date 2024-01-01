import React, { useReducer, useState } from 'react'
import './App.scss'

interface Todo {
  id: number
  text: string
  completed: boolean
}

type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number }
  | { type: 'EDIT_TODO'; payload: { id: number; text: string } }

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload)
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      )
    default:
      return state
  }
}

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [newTodo, setNewTodo] = useState('')
  const [editTodo, setEditTodo] = useState<{ id: number; text: string } | null>(null)

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo })
      setNewTodo('')
    }
  }

  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  const handleEditTodo = (id: number, text: string) => {
    if (text.trim() !== '') {
      dispatch({ type: 'EDIT_TODO', payload: { id, text } })
      setEditTodo(null)
    } else {
      alert('Todo text cannot be empty')
    }
  }

  return (
    <div className='todo-app'>
      <h1 className='todo-app__title'>Todo App</h1>
      <div className='todo-app__input-container'>
        <input
          className='todo-app__input'
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new todo'
        />
        <button className='todo-app__button' onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul className='todo-app__list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-app__item'>
            {!editTodo ? (
              <>
                <span
                  className={`todo-app__text ${todo.completed ? 'todo-app__text--completed' : ''}`}
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <button
                  className='todo-app__button'
                  onClick={() => setEditTodo({ id: todo.id, text: todo.text })}
                >
                  Edit
                </button>
                <button className='todo-app__button' onClick={() => handleRemoveTodo(todo.id)}>
                  Remove
                </button>
              </>
            ) : editTodo.id === todo.id ? (
              <div className='todo-app__edit-container'>
                <input
                  className='todo-app__edit-input'
                  type='text'
                  value={editTodo.text}
                  onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
                />
                <button
                  className='todo-app__button'
                  onClick={() => handleEditTodo(editTodo.id, editTodo.text)}
                >
                  Save
                </button>
                <button className='todo-app__button' onClick={() => setEditTodo(null)}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span
                  className={`todo-app__text ${todo.completed ? 'todo-app__text--completed' : ''}`}
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <button
                  className='todo-app__button'
                  onClick={() => setEditTodo({ id: todo.id, text: todo.text })}
                >
                  Edit
                </button>
                <button className='todo-app__button' onClick={() => handleRemoveTodo(todo.id)}>
                  Remove
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
