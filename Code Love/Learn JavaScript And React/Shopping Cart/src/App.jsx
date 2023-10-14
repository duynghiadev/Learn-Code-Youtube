import { useState } from 'react'
import './App.css'
import CartList from './components/CartList'
import FooterCart from './components/FooterCart'
import NavBar from './components/NavBar'
import cartList from './service/cart'

function App() {
  const [carts, setCarts] = useState(cartList)
  console.log(carts)

  return (
    <main>
      <NavBar />
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <CartList carts={carts} />
        <FooterCart />
      </section>
    </main>
  )
}

export default App

// truyền data từ cha (parent) xuống con (child)
