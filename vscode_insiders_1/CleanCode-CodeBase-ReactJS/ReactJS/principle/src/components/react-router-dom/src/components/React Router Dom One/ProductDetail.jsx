// ProductDetail.jsx
import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css' // Import file CSS

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const { productId } = useParams()

  const fetchProduct = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product details:', error)
    }
  }, [productId])

  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])

  return (
    <div className='product-detail-container'>
      <h2 className='product-detail-title'>Product Detail</h2>
      {product ? (
        <div className='product-details'>
          <p>
            <span className='detail-label'>Title:</span> {product.title}
          </p>
          <p>
            <span className='detail-label'>Body:</span> {product.body}
          </p>
          {/* Add other product details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetail
