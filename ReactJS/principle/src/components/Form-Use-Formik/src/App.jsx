import './App.css'
import FormContainer from './components/Create Form One/FormContainer'
import MainComponentSuccess from './components/Create Form Three/MainComponentSuccess'
import MainComponent from './components/Create Form Two/MainComponent'

function App() {
  return (
    <div>
      <h1>Your React App</h1>
      <FormContainer />
      <br />
      <hr />
      <br />
      <MainComponent />
      <br />
      <hr />
      <br />
      <MainComponentSuccess />
    </div>
  )
}

export default App
