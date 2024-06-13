import { createContext } from 'react'

// create context
const UserContext = createContext([
  {
    firstName: 'Bob',
    lastName: 'Bobberson',
    suffix: 1,
    email: 'bobberson@example.com'
  },
  (obj) => {
    console.log('obj from UserContext:', obj)
    return obj
  } /// update function
])

const { Provider } = UserContext

console.log('Provider in UserContext:', Provider)
console.log('Provider._context._currentValue:', Provider._context._currentValue)
console.log('Provider._context._currentValue[0]:', Provider._context._currentValue[0])
console.log('Provider._context._currentValue[1]:', Provider._context._currentValue[1])

console.log('------------------------------')

export { Provider, UserContext }
