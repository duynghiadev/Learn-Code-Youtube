import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <div className='row my-container'>
        <div className='col-lg-7 leftlayout'>
          <Outlet></Outlet>
        </div>
        <div className='col-lg-5 rightlayout'>
          <p>CÁC TÍNH NĂNG</p>
          <div className='rightlayout-item'>
            <NavLink to='canbachai'>Căn bậc 2</NavLink>
          </div>
          <div className='rightlayout-item'>
            <NavLink to='maytinhcong'>Máy tính cộng</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
