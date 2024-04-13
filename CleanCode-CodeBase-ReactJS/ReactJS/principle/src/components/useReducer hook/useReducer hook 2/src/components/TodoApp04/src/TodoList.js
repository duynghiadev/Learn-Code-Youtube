import React, { useContext } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'
import { TodosContext } from './context/todos.context'

function TodoList() {
  const todos = useContext(TodosContext)

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo {...todo} />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    )
  return null
}

export default TodoList
