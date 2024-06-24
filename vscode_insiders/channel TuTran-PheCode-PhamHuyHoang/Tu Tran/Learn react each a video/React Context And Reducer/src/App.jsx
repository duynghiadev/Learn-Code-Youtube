import './App.css'
import AppContextProvider from './components/AppContextProvider'
import Reservation from './components/Reservation'
import Table from './components/Table'

function App() {
  return (
    <AppContextProvider>
      <h1 style={{ textAlign: 'center' }}>React Context + Reducer</h1>
      <div className='App'>
        <Reservation />
        <Table />
      </div>
    </AppContextProvider>
  )
}

export default App
