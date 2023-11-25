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

        <CartList carts={carts} />

        <FooterCart cartAmount={cartAmount()} />
      </section>
    </main>
  )
}

export default App

// reserve keyword

// cách truyền dữ liệu thì chỉ có 2 cách thôi: parent -> child và child -> parent
