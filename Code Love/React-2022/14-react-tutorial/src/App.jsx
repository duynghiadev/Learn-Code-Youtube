import './App.css'
import Counter from './component/Counter'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'
import Tab from './component/Tab'
import Tag from './component/Tag'
import Wrapping from './component/Warning'
import HelloComponent from './component/HelloComponent.jsx'
import JavComponent from './component/JavComponent.jsx'
import { useState } from 'react'
import Child from './component/Child.jsx'
import NavBar from './component/NavBar.jsx'
import CartList from './component/CartList.jsx'
import FooterCart from './component/FooterCart.jsx'
import cartList from './service/cart.jsx'

function App() {
  // const urlImage =
  //   'https://plus.unsplash.com/premium_photo-1683141316518-70595b251f01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  // const [parentToChild, setParentToChild] = useState('parent to child')

  const [carts, setCarts] = useState(cartList)

  console.log('------------------Render Start------------------')
  console.log('------------------carts:------------------', carts)

  function cartTotal() {
    let cartTotal = 0
    for (let i = 0; i < carts.length; i++) {
      cartTotal += carts[i].amount
    }
    return cartTotal
  }

  function cartAmount() {
    let cartAmount = 0
    for (let i = 0; i < carts.length; i++) {
      cartAmount += carts[i].amount * carts[i].price
    }
    return cartAmount
  }

  // Cách 2: Sử dụng phương thức reduce để xử lý mảng => nên dùng cách này
  // Nếu chưa quen thì có thể dùng vòng lặp for. => Khuyến khích dùng reduce✅

  // const totalCart = carts.reduce((total, currentValue) => {
  //   return total + currentValue.amount
  // }, 0)

  const handleClickRemove = (id) => {
    const newStateCart = carts.filter((cartItem) => {
      if (cartItem.id !== id) {
        return true
      }
    })
    setCarts(newStateCart)
  }

  const handleClickIncrement = (cartItem) => {
    console.log('each cartItem:', cartItem)
    //  Tìm index tăng số lượng => sau đó chúng ta thay đổi phần tử amount trong index đấy
    const indexElement = carts.findIndex((cartElementLoop) => {
      return cartElementLoop.id === cartItem.id
    })

    const cartNewState = [...carts]
    cartNewState[indexElement] = { ...cartItem }
    console.log('handleClickIncrement cartNewState[indexElement]:', cartNewState[indexElement])

    cartNewState[indexElement].amount++
    console.log('cart before:', carts)
    console.log('cart after:', cartNewState)

    setCarts(cartNewState)
  }

  const handleClickDecrement = (cartItem) => {
    console.log('handleClickDecrement parent:', cartItem)

    //  Tìm index cần giảm số lượng
    const indexElement = carts.findIndex((cartItemLoop) => {
      return cartItemLoop.id === cartItem.id
    })

    const cartNewState = [...carts]
    console.log('cartNewState:', cartNewState)

    cartNewState[indexElement] = { ...cartItem }
    console.log('handleClickDecrement cartNewState[indexElement]:', cartNewState[indexElement])

    cartNewState[indexElement].amount--

    setCarts(cartNewState)
  }

  const handleClearAllCart = () => {
    setCarts([])
  }

  const cartsCheckAmountNoEmpty = carts.filter((cartItem) => {
    if (cartItem.amount > 0) {
      return true
    }
  })

  console.log('cartsCheckAmountNoEmpty:', cartsCheckAmountNoEmpty)

  if (carts.length === 0 || cartsCheckAmountNoEmpty.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is current empty</h4>
        </header>
      </section>
    )
  }

  console.log('carts check:', carts)

  return (
    /**
     * Đây là bài học ✅
     */
    // <div className='App'>
    //    Mỗi cái component thực chất ra đó là instance trong JavaScript
    //   <h1>Hello World</h1>
    //    <img className='img_feature' src={urlImage} alt='photo' />
    //  <Counter />
    //  <Counter1 />
    //  <Wrapping />
    //  <Tab />
    //  <Tag />
    // <Counter2 />
    // <HelloComponent />
    // <JavComponent />
    // <Child parentToChild={parentToChild} name='duynghiadev' />
    // </div>
    /**
     * Đây là bài tập thực hành làm cart project ✅
     */
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

        <FooterCart cartAmount={cartAmount()} onClearAllCart={handleClearAllCart} />
      </section>
    </main>
  )
}

export default App

// reserve keyword

// cách truyền dữ liệu thì chỉ có 2 cách thôi: parent -> child và child -> parent
