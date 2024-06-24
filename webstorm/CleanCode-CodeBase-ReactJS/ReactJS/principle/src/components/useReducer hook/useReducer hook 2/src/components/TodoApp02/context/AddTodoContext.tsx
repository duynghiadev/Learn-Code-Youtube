import { useCallback, useContext, useState } from 'react'
import { Todo } from '../reducers/reducers'
import { TodoContext } from './TodoContext'

export const AddTodo: React.FC = () => {
  const dispatch = useContext(TodoContext)
  const [todo, setTodo] = useState<Todo>({ name: '', checked: false })

  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      name: event.target.value,
      checked: false
    })
  }

  const handleAddClick = useCallback(() => {
    if (todo.name.trim()) {
      dispatch({
        type: 'ADD_TODO',
        payload: todo
      })
      setTodo({
        name: '',
        checked: false
      })
    }
  }, [dispatch, todo])

  return (
    <div className='add-form'>
      <input onChange={handleChangeTodo} value={todo.name} type='text' />
      <button onClick={handleAddClick}>ADD</button>
    </div>
  )
}
