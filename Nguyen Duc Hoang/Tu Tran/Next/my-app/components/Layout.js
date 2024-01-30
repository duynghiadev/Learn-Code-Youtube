import Footer from './Footer'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
