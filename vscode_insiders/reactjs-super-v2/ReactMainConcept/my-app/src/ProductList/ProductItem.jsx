import React from 'react'

export class ProductItem extends React.Component {
  render() {
    const { product } = this.props

    return (
      <div className='product-item'>
        <input />
        {product.name} - {product.avatar}
      </div>
    )
  }
}
