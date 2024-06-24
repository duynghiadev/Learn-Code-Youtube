import './App.css'
import UseState from './components/UseState'
import UseContext from './components/useContext/useContext'
import UseEffect from './components/useEffect'
import UseEffect1 from './components/useEffect1'
import UseReducer from './components/useReducer'
import UseRef from './components/useRef'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        🚀🔥🔥🔥 Hello React Hooks 2021 🚀🔥🔥🔥
      </h1>
      <hr />
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseEffect1 />
      <hr />
      <UseRef />
      <hr />
      <UseContext />
      <hr />
      <UseReducer />
      <hr />
    </div>
  )
}

export default App
