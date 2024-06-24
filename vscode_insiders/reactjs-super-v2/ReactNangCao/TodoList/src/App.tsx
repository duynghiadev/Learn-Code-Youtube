// import Count from './components/Count'
// import Counter from './components/Counter'
// import AutoInput from './components/AutoInput'
// import ProductList from './components/ProductList'
// import Welcome from './components/Welcome'
// import Slider from './components/Slider'
import TodoList from './components/TodoList'
// import Watch from './components/Watch'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Ads from './components/Render Prop/Ads'
import Manager from './components/Manager'
import MouseTracker from './components/Render Prop/MouseTracker'
import { PositionType } from './components/Render Prop/MouseTracker/MouseTracker'
import MainLayout from './layouts/MainLayout'
import User from './components/User'

// const renderAds = (value: PositionType) => <Ads {...value} visible />

function App() {
  const [visible, setVisible] = useState(true)
  // const [, render] = useState({})
  // const renderRef = useRef<any>((value: PositionType) => <Ads {...value} visible />)
  // const renderAds = useCallback((value: PositionType) => <Ads {...value} visible />, [])
  // const renderAds = useMemo(() => {
  //   return (value: PositionType) => <Ads {...value} visible />
  // }, [])

  return (
    <div>
      {/* <Watch /> */}
      <TodoList />
      {/* <Slider /> */}
      {/* <Count /> */}
      {/* <Counter /> */}
      {/* {<Welcome />} */}
      {/* <AutoInput /> */}
      {/* <ProductList /> */}

      {/* <MainLayout>
        <Manager />
      </MainLayout> */}

      {/* <div>
        <button onClick={() => render({})}>Force Rerender</button>
      </div>
      <MouseTracker render={renderRef.current} /> */}
      {/* <Ads visible /> */}

      {/* <div>
        <button onClick={() => setVisible((prev) => !prev)}>Change visible</button>
      </div>
      {visible && <User />} */}
    </div>
  )
}

export default App
