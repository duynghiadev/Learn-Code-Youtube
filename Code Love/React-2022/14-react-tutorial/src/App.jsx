import './App.css'
import Counter from './component/Counter'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'
import Tab from './component/Tab'
import Tag from './component/Tag'
import Wrapping from './component/Warning'
import HelloComponent from './component/HelloComponent.jsx'
import JavComponent from './component/JavComponent.jsx'

function App() {
  // const urlImage =
  //   'https://plus.unsplash.com/premium_photo-1683141316518-70595b251f01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className='App'>
      {/* Mỗi cái component thực chất ra đó là instance trong JavaScript */}
      {/*<h1>Hello World</h1>*/}
      {/* <img className='img_feature' src={urlImage} alt='photo' /> */}
      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* <Wrapping /> */}
      {/* <Tab /> */}
      {/* <Tag /> */}
      {/*<Counter2 />*/}
      {/*<HelloComponent />*/}
      <JavComponent />
    </div>
  )
}

export default App

// reserve keyword
