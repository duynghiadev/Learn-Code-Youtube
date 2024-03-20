import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-lg-7 leftlayout'>left</div>
        <div className='col-lg-5 rightlayout'>right</div>
      </div>
    </div>
  )
}

export default App
