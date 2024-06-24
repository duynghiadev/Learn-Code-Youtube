import { createContext } from 'react'

export const RouterContext = createContext()

const Routes = (props) => {
  const objectData = {
    location: window.location,
    history: window.history
  }

  return <RouterContext.Provider value={objectData}>{props.children}</RouterContext.Provider>
}

export default Routes
