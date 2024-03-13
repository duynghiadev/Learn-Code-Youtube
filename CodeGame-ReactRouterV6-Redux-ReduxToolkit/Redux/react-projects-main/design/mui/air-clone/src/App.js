import { CssBaseline } from '@mui/material'
import FilterBar from './components/FilterBar'
import Header from './components/NavBar/NavBar'
import TravelLocations from './components/TravelLocations'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <FilterBar />
      <TravelLocations />
    </>
  )
}

export default App
