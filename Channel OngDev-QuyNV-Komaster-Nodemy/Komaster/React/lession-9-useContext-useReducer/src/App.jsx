import Todos from '../components/UseReducerWithContext'
import UseStateComparison from '../components/UseStateComparison'

function App() {
  return (
    <>
      <UseStateComparison />
      <h1 style={{ textAlign: 'center' }}>===========================</h1>
      <Todos />
    </>
  )
}

export default App
