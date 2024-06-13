import React, { useState, useReducer, ChangeEvent } from 'react'
import { Todo, initialState, todoReducer } from './reducer/reducers'
import { Action } from './reducer/actions'

const TodoApp03: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddAction = (newTodo: Todo) => {
    const action: Action = {
      type: '[TODO] add todo',
      payload: newTodo
    }
    dispatch(action)
  }

  const handleDeleteAction = (id: number) => {
    dispatch({
      type: '[TODO] remove todo',
      payload: id
    })
  }

  const addNewTodo = () => {
    const newTodo: Todo = {
      id: new Date().getTime(),
      todo: inputValue,
      done: false
    }

    handleAddAction(newTodo)
    setInputValue('')
  }

  return (
    <div className='App'>
      <h1>TODO List with reducer</h1>
      <input type='text' placeholder='new todo' value={inputValue} onChange={handleInputChange} />
      <button onClick={addNewTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <span onClick={() => handleDeleteAction(todo.id)}> [❌]</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp03
