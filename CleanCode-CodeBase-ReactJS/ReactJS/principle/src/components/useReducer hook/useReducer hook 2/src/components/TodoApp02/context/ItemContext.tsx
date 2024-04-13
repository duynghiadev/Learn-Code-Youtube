import { useCallback, useContext } from 'react'
import { TodoContext } from './TodoContext'

export const Item: React.FC<{ children: string; checked: boolean }> = ({ children, checked }) => {
  const dispatch = useContext(TodoContext)

  const handleCheck = useCallback(() => {
    dispatch({
      type: 'CHECK_TODO',
      payload: children
    })
  }, [children, dispatch])

  const handleDeleteClick = useCallback(() => {
    dispatch({
      type: 'DELETE_TODO',
      payload: children
    })
  }, [children, dispatch])

  return (
    <li>
      <input type='checkbox' onChange={handleCheck} checked={checked} />
      <span>{children}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  )
}
