import { useReducer } from 'react'
import { initialState, reducer } from '../store'

function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  return (
    <div className='container-md box'>
      {state.map((todo) => (
        <div className='todo' key={todo.id}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => handleComplete(todo)}
          />
          <label>{todo.title}</label>
        </div>
      ))}
    </div>
  )
}

export default Todos
