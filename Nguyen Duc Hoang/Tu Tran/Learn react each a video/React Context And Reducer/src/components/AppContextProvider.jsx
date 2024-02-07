import { useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import { AppContext } from '../context/context'

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
