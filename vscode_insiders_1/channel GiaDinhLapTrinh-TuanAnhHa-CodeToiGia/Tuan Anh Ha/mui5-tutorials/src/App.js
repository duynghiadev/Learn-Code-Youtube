import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Create from './pages/create'
import Translate from './pages/translate'
import Summary from './pages/summary'
import ChipExample from './pages/chip/chip'

import { CustomerProvider } from './context/CustomerContext'

function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/translate' element={<Translate />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/chip-example' element={<ChipExample />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  )
}

export default App
