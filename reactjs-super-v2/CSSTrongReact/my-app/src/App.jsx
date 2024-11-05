import './App.scss'
import Cart from './Cart'
import ProductList from './ProductList'

function App() {
  return (
    <div>
      <ProductList />
      <Cart isShow={true} />
    </div>
  )
}

export default App
