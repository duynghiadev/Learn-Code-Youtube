import { useContext, useState } from 'react'
import { TodoListContext } from '../context/TodoListContext'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTodoItem } = useContext(TodoListContext)

  return (
    <>
      <input
        type='text'
        value={inputValue}
        placeholder={'Type and add todo item'}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodoItem(inputValue)
          setInputValue('')
        }}
      >
        Add
      </button>
    </>
  )
}

export default AddTodo
