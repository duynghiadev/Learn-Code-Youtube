import NavBar from './components/NavBar'
import CartList from './components/CartList'
import FooterCart from './components/FooterCart'
import { useState } from 'react'
import cartList from './service/cart'
import Test from './components/Test'

function App() {
  
  const [ carts, setCarts ] = useState(cartList)
  
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
  
  const handleClickRemove = (id) => {
    
    const newStateCart = carts.filter(function(cartItem) {
      if (cartItem.id !== id) {
        return true
      }
    })
    
    setCarts(newStateCart)
    
  }
  
  const handleClickIncrement = (cartItem) => {
    // tìm index tăng số lượng
    const indexElement = carts.findIndex(function(cartItemLoop) {
      return cartItemLoop.id === cartItem.id
    })
    
    const cartNewState = [ ...carts ]
    cartNewState[indexElement] = { ...cartItem }
    cartNewState[indexElement].amount++
    setCarts(cartNewState)
  }
  
  const handleClickDecrement = (cartItem) => {
    // tìm index tăng số lượng
    const indexElement = carts.findIndex(function(cartItemLoop) {
      return cartItemLoop.id === cartItem.id
    })
    
    const cartNewState = [ ...carts ]
    cartNewState[indexElement] = { ...cartItem }
    cartNewState[indexElement].amount--
    setCarts(cartNewState)
  }
  
  const handleClearAllCart = () => {
    setCarts([])
  }
  
  const cartsCheckAmountNoEmpty = carts.filter(function(cartItem) {
    if (cartItem.amount > 0) {
      return true
    }
  })
  
  if (carts.length === 0 || cartsCheckAmountNoEmpty.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is current Empty</h4>
        </header>
      </section>
    )
  }
  
  return (
    <main>
      
      <NavBar cartTotal={cartTotal()} />
      
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        
        <CartList
          carts={carts}
          onClickRemove={handleClickRemove}
          onClickIncrement={handleClickIncrement}
          onClickDecrement={handleClickDecrement}
        />
        
        <FooterCart
          cartAmount={cartAmount()}
          onClearAllCart={handleClearAllCart}
        />
        
        <Test />
      
      </section>
    </main>
  )
}

export default App

// truyen data from parenet to child
