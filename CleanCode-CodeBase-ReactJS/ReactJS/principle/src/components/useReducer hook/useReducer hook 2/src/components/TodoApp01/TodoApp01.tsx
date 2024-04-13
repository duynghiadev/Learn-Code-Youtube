import React, { useReducer, useState, useEffect } from 'react'
import { todoReducer } from '../../reducer/reducers'
import '../../App.scss'

const TodoApp01: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [newTodo, setNewTodo] = useState('')
  const [editTodo, setEditTodo] = useState<{ id: number; text: string } | null>(null)

  // Use the useEffect hook to retrieve the stored todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      dispatch({ type: 'SET_TODOS', payload: JSON.parse(storedTodos) }) // JSON.parse() is convert from string to object
    }
  }, [])

  // Use the useEffect hook to update localStorage with the new todos whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) // JSON.stringify() is convert from object to string
  }, [todos])

  // Define the function to handle adding a new todo item
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo })
      setNewTodo('')
    } else {
      alert('Todo text cannot be empty')
    }
  }

  // Define the function to handle toggling the completed status of a todo item
  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  // Define the function to handle removing a todo item
  const handleRemoveTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  // Define the function to handle editing a todo item
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
      <h1 className='todo-app__title'>Todo App Simple</h1>
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
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
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
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
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
export default TodoApp01
