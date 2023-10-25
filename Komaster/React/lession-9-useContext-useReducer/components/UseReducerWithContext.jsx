import { useReducer, createContext } from 'react'
import { initialState, reducer } from '../store'
import AddNewTodo from './AddNewTodo'

export const StoreContext = createContext()

function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  return (
    <StoreContext.Provider value={[state, dispatch]}>
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
        <AddNewTodo />
      </div>
    </StoreContext.Provider>
  )
}

export default Todos
