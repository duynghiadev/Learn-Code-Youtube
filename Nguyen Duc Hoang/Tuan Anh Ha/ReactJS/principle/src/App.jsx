import './App.css'
import ReactBatchingOne from './react-batching/ReactBatchingOne'
import ReactBatchingThree from './react-batching/ReactBatchingThree'
import ReactBatchingTwo from './react-batching/ReactBatchingTwo'

function App() {
  return (
    <h2>
      This is code in folder principle
      {/* <ReactBatchingOne /> */}
      {/* <ReactBatchingTwo /> */}
      <ReactBatchingThree />
    </h2>
  )
}

export default App
