import axios from 'axios'
import { useEffect, useState } from 'react'

type productItem = {
  id: number
  name: string
  price: number
  thumbnail: string
}

const Products = () => {
  const [products, setProducts] = useState<productItem[]>([])

  useEffect(() => {
    console.log('Get products data from APIs')
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3003/products')
        console.log('res:', res)
        setProducts(res.data)
      } catch (error) {
        console.log('error:', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className='row'>
      <h3>Products</h3>
      {products.map((item) => {
        return (
          <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='card'>
              <img src={item.thumbnail} className='card-img-top' alt={item.name} />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.price}</p>
                <a href='#' className='btn btn-sm btn-success'>
                  <i className='fas fa-shopping-cart'></i>
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
