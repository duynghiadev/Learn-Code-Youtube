// ProductList.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css' // Import file CSS

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='product-list-container'>
      <h2 className='product-list-title'>Product List</h2>
      <ul className='product-list'>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className='product-link'>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
