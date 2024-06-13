import React from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../Product/actions/action'

function Cart(props) {
  return (
    <div>
      GIỎ HÀNG
      <div
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: '100vh',
          padding: '20px',
          paddingLeft: '100px',
          textAlign: 'start'
        }}
      >
        {props.cart.map((product) => (
          <div key={product.id} style={{ display: 'flex' }}>
            <div style={{ width: '30%' }}>{`${product.name}`}</div>
            {product.quantity === undefined ? (
              <div style={{ width: '40%' }}>{`${product.price}`}</div>
            ) : (
              <div style={{ width: '40%' }}>{`${product.price}x${product.quantity}`}</div>
            )}
            <div style={{ width: '5%' }}>
              <button onClick={() => props.deleteProduct(product)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
    total: state.cart.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) => dispatch(deleteProduct(product_current))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
