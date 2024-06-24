import React, { useState } from 'react'
import { ProductItem } from './ProductItem'

const ProductList = () => {
  const [productList, setProductList] = useState([
    {
      id: '1a',
      name: 'Sony',
      avatar: '🎈'
    },
    {
      id: '2b',
      name: 'Iphone',
      avatar: '🎉'
    },
    {
      id: '3c',
      name: 'Samsung',
      avatar: '🎁'
    }
  ])

  const orderProductList = () => {
    setProductList(
      [...productList].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    )
  }

  const addProduct = () => {
    setProductList([
      {
        id: '4d',
        name: 'Huawei',
        avatar: '📞'
      },
      ...productList
    ])
  }

  return (
    <div>
      <h1>ProductList</h1>
      <button onClick={orderProductList}>Order Product List</button>
      <button onClick={addProduct}>Add Product</button>

      <div className='product-list'>
        {productList.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
