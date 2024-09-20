import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { useShoppingContext } from '../contexts/ShoppingContext'
import { formatCurrency } from '../helpers/common'

const Header = () => {
  const { cartItems, cartQty, totalPrice } = useShoppingContext()

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <strong>Duy Nghia Dev</strong>
        </Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownCart'
                data-bs-auto-close='outside'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fas fa-shopping-cart'></i>
                <span className='position-absolute top-0 start-1 badge badge-pill bg-danger'>
                  {cartQty}
                </span>
              </a>

              <ul
                className='dropdown-menu dropdown-menu-end cart-dropdown'
                aria-labelledby='navbarDropdownCart'
              >
                <li>
                  <h3 className='dropdown-item'>Your Cart</h3>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <div className='table-responsive'>
                    <table className='table'>
                      <tbody>
                        {cartItems.map((item) => {
                          return <CartItem key={item.id} {...item} />
                        })}
                      </tbody>
                    </table>
                  </div>
                </li>

                <li>
                  <span className='float-start ms-2'>
                    <strong>Total: {formatCurrency(totalPrice)}</strong>
                  </span>
                  <Link to='/checkout' className='btn btn-sm btn-success float-end me-2'>
                    Checkout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
