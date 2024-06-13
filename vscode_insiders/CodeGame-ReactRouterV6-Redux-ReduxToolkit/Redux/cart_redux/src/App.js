import './App.css'
import Product from './Product/index'
import Cart from './Cart/index'
import { product } from './dummy/product'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '50%' }}>
            {product.map((pr) => (
              <Product key={pr.id} id={pr.id} name={pr.name} price={pr.price} />
            ))}
          </div>
          <div style={{ width: '40%' }}>
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
