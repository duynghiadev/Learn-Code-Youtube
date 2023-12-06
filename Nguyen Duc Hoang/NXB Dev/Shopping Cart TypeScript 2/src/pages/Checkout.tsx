import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useShoppingContext } from '../contexts/ShoppingContext'
import { formatCurrency } from '../helpers/common'

const Checkout = () => {

    const navigate = useNavigate()
    const { cartItems, totalPrice, increaseQty, decreaseQty, removeCartItem, clearCart } = useShoppingContext()

    return (
        <div className="row">
            <h3>Checkout</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => {
                        return (
                            <tr key={item.id}>
                                <td><img src={item.thumbnail} className='img-fluid rounded' alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{formatCurrency(item.price)}</td>
                                <td>{item.qty}
                                    <button type="button" className="btn btn-sm btn-primary ms-3 me-1" onClick={() => decreaseQty(item.id)}><strong>-</strong></button>
                                    <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(item.id)}><strong>+</strong></button>
                                </td>
                                <td>{formatCurrency(item.price * item.qty)}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(item.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='col-md-12'>
                <span className='float-end me-2'><strong>Total: {formatCurrency(totalPrice)}</strong></span>
            </div>
            <div className='col-md-12 mt-5'>
                <Link to='/products' className='btn btn-sm btn-primary float-start'>Continue shopping</Link>
                <button className='btn btn-sm btn-success float-end me-2 d-block' onClick={() => {
                    clearCart()
                    navigate('/products')
                }}>Place Order</button>
            </div>
        </div>
    )
}

export default Checkout