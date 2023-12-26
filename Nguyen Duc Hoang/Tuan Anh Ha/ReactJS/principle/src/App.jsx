import './App.css'
import ComplexClassComponent from './components/componentFirst/classComponentOne'
import ComplexLifecycleComponent from './components/componentFirst/classComponentTwo'
import ComplexFunctionComponent from './components/componentFirst/functionComponent'
import AppComponent from './components/props/App Component One/appComponent'
import UserList from './components/props/App Component Three/appComponent-2'
import AppComponentOne from './components/props/App Component Two/appComponent-1'
import ReactBatchingOne from './components/react-batching/ReactBatchingOne'
import ReactBatchingThree from './components/react-batching/ReactBatchingThree'
import ReactBatchingTwo from './components/react-batching/ReactBatchingTwo'

function App() {
  return (
    <h2>
      This is code in folder principle
      <hr />
      {/* <ReactBatchingOne /> */}
      {/* <ReactBatchingTwo /> */}
      {/* <ReactBatchingThree /> */}
      {/* <ComplexClassComponent /> */}
      {/* <ComplexLifecycleComponent /> */}
      {/* <ComplexFunctionComponent /> */}
      {/* <AppComponent /> */}
      {/* <AppComponentOne /> */}
      <UserList />
    </h2>
  )
}

export default App
