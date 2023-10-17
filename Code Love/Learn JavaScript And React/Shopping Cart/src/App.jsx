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

  /**
   * - Có 2 cách tính tổng của một mảng:
   * + Cách thứ 1 là mình dùng vòng lặp for
   * + Cách thứ 2 là mình dùng hàm reduce
   */
  const totalCart = carts.reduce(function (total, currentValue) {
    console.log('total:', total)
    console.log('currentValue:', currentValue)
    return total + currentValue.amount
  }, 0)
  console.log('totalCart:', totalCart)

  const handleClickRemove = (id) => {
    const newStateCart = carts.filter(function (cartItem) {
      if (cartItem.id !== id) {
        return true
      }
    })
    setCarts(newStateCart)
  }

  // write function up product
  const handleClickIncrement = (cartItem) => {
    // Tìm index tăng số lượng
    const indexElement = carts.findIndex(function (cartItemLoop) {
      return cartItemLoop.id === cartItem.id
    })
    const cartNewState = [...carts]
    cartNewState[indexElement].amount++
    setCarts(cartNewState)

    console.log('cart before up:', carts)
    console.log('cart after up:', cartNewState)
  }

  // write function down product
  const handleClickDecrement = (cartItem) => {
    // Tìm index giảm số lượng
    const indexElement = carts.findIndex(function (cartItemLoop) {
      return cartItemLoop.id === cartItem.id
    })
    const cartNewState = [...carts]
    cartNewState[indexElement].amount--
    setCarts(cartNewState)

    console.log('cart before down:', carts)
    console.log('cart after down:', cartNewState)
  }

  if (carts.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is current empty</h4>
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
        <FooterCart cartAmount={cartAmount()} />
      </section>
    </main>
  )
}

export default App

// truyền data từ cha (parent) xuống con (child)
