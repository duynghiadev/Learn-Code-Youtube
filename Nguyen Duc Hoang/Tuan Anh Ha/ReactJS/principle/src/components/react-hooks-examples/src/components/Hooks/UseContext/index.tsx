import React, { useContext, useState } from 'react'
import { Provider, UserContext } from './UserContext'

const UseContext = () => {
  const user = useState({
    firstName: 'James',
    lastName: 'Tan',
    suffix: 1,
    email: 'james@example.com'
  })

  return (
    <div>
      <Provider value={user}>
        <h1 className='ft-red'>1st Provider</h1>⬇<Level2></Level2>
      </Provider>
    </div>
  )
}

const Level2 = () => (
  <div>
    <h4>2nd Level</h4>⬇<Level3></Level3>
  </div>
)

const Level3 = () => (
  <div>
    <h4>3rd Level</h4>⬇<Level4></Level4>
  </div>
)

const Level4 = () => (
  <div>
    <h4>4th Level</h4>⬇<Level5></Level5>
  </div>
)

const Level5 = () => {
  // 接收context
  const [user, setUser] = useContext<any>(UserContext)
  return (
    <div>
      <h5 className='ft-red'>useContext</h5>
      <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button
        onClick={() => {
          setUser({ ...user, suffix: user.suffix + 1 })
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default UseContext
