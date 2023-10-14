import { useState } from 'react'
import './App.css'
import CartList from './components/CartList'
import FooterCart from './components/FooterCart'
import NavBar from './components/NavBar'
import cartList from './service/cart'

function App() {
  const [carts, setCarts] = useState(cartList)

  function cartTotal() {
    let cartTotal = 0
    for (let i = 0; i < carts.length; i++) {
      cartTotal = cartTotal + carts[i].amount
    }
    return cartTotal
  }

  function cartAmount() {
    let cartAmount = 0
    for (let i = 0; i < carts.length; i++) {
      cartAmount = cartAmount + carts[i].amount * carts[i].price
    }
    return cartAmount
  }

  return (
    <main>
      <NavBar cartTotal={cartTotal()} />
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <CartList carts={carts} />
        <FooterCart cartAmount={cartAmount()} />
      </section>
    </main>
  )
}

export default App

// truyền data từ cha (parent) xuống con (child)
