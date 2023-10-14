import './App.css'
import CartList from './components/CartList'
import FooterCart from './components/FooterCart'
import NavBar from './components/NavBar'

function App() {
  return (
    <main>
      <NavBar />
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <CartList />
        <FooterCart />
      </section>
    </main>
  )
}

export default App
