import React, { useState } from 'react'
import { createContext, useContext } from 'react';

const mainContext = createContext(null);

const MainContext = ({children}) => {
    const [count , setCount] = useState(1)

    const changeCountNew = async () => {
        setCount(2)
    }
  return (
    <mainContext.Provider value={{changeCountNew, count}}>
        {children}
    </mainContext.Provider>
  )
}
export const useMainGlobalContext = () => {
    return useContext(mainContext);
  };
  
  export { MainContext };