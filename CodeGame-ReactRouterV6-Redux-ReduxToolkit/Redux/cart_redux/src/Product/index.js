import React from 'react'
import { buyProduct } from './actions/action'
import { connect } from 'react-redux'

function Product(props) {
  const product_current = {
    id: props.id,
    name: props.name,
    price: props.price
  }

  return (
    <div style={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
      <div
        style={{
          width: '30%',
          backgroundColor: 'orange'
        }}
      >
        {props.name}
      </div>
      <div style={{ width: '60%', backgroundColor: 'aquamarine' }}>{props.price}</div>
      <div style={{ width: '10%' }}>
        <button onClick={() => props.buyProduct(product_current)} style={{ width: '100%', height: '100%' }}>
          Mua
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (product_current) => dispatch(buyProduct(product_current))
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
