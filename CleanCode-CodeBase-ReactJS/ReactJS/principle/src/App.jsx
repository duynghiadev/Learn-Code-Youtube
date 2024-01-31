import './App.css'
import TernaryOperatorApi from './components/Ternary Operator/ternaryOperatorApi'
import ComplexClassComponent from './components/componentFirst/classComponentOne'
import ComplexLifecycleComponent from './components/componentFirst/classComponentTwo'
import ComplexFunctionComponent from './components/componentFirst/functionComponent'
import UserListOne from './components/onClick/ExampleOne/UserListOne'
import UserListTwo from './components/onClick/ExampleTwo/UserListTwo'
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
      {/* <UserList /> */}
      {/* <UserListOne /> */}
      {/* <UserListTwo /> */}
      <TernaryOperatorApi />
    </h2>
  )
}

export default App
