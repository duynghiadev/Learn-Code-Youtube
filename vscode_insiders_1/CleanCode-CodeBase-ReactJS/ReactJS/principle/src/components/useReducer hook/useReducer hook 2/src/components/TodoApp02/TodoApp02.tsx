import React, { useReducer } from 'react'
import { AddTodo } from './context/AddTodoContext'
import { Item } from './context/ItemContext'
import { TodoContext } from './context/TodoContext'
import { reducer } from './reducers/reducers'

const TodoApp02: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, [])

  return (
    <TodoContext.Provider value={dispatch}>
      <div className='todo-list'>
        <div className='title'>TodoList</div>
        <AddTodo />
        <ul>
          {todos.map((todo) => (
            <Item key={todo.name} checked={todo.checked}>
              {todo.name}
            </Item>
          ))}
        </ul>
      </div>
    </TodoContext.Provider>
  )
}

export default TodoApp02
