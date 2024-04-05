import { Button, TextField } from '@mui/material'
import Todo from './components/Todo'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Todo = {
  id: string
  name: string
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [newTodoString, setNewTodoString] = useState('')

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }

  const onAddingBtnClick = () => {
    const newTodoItem: Todo = {
      id: uuidv4(),
      name: newTodoString
    }

    setTodoList([...todoList, newTodoItem])
    setNewTodoString('')
  }

  return (
    <>
      <p>This is Todo App</p>
      <div>
        <TextField size='small' value={newTodoString} onChange={onNewTodoChange} />
        <Button variant='contained' onClick={onAddingBtnClick}>
          Thêm
        </Button>
      </div>

      <div>
        {todoList.map((todo) => {
          return <Todo name={todo.name} />
        })}
      </div>
    </>
  )
}

export default App
