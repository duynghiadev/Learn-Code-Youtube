import React from 'react'
import Movie from './hoc/Movie'
import Counter from './hooks/Counter'
import Users from './hooks/Users'
import InfoContainer from './context/InfoContainer'
import './css/app.css'

const App = () => {
  return (
    <div className='app'>
      <InfoContainer />
      <Movie id='1' />
      <Counter />
      <Users />
    </div>
  )
}

export default App
