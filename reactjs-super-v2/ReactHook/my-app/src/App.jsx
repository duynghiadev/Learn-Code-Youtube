import { useState } from 'react'
import './App.css'
import User from './User'
import UserClassComponent from './User.class'
import UserUseContext from './UseContext/User'
import RuleOfHook from './ruleOfHook'
import AutoBatching from './AutoBatching'

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      {/* <UserClassComponent /> */}
      {/* {isShow && <User />} */}
      {/* <button onClick={() => setIsShow((prevState) => !prevState)}>Change isShow</button> */}

      {/* <UserUseContext /> */}

      {/* <RuleOfHook /> */}

      <AutoBatching />
    </div>
  )
}

export default App
