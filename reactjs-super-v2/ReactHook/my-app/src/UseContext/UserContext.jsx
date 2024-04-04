import { createContext } from 'react'

export const UserContext = createContext({
  address: {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu',
      house: 'Building'
    }
  },
  age: 100,
  firstName: 'Ronaldo',
  increaseAge: () => {}
})
