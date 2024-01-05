import { createContext } from 'react'

// 创建context
const UserContext = createContext([
  {
    firstName: 'Bob',
    lastName: 'Bobberson',
    suffix: 1,
    email: 'bobberson@example.com'
  },
  (obj) => {
    console.log(obj)
    return obj
  } /// update function
])
const { Provider } = UserContext

export { Provider, UserContext }
