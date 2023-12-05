import { useNavigate, useParams } from 'react-router-dom'
/**
 * useParams là truyền parameter
 * useNavigate là truyền giữa màn hình này sang màn hình khác
 */

const Product = () => {
  const navigate = useNavigate() // "navigate" is a function
  const { productId } = useParams() // distructuring a field from an object

  return (
    <div>
      This is Products <br />
      Product's ID is: {productId} <br /> <br />
      <button
        onClick={() => {
          // alert('Click me')
          navigate('/about')
        }}
      >
        Navigate to About
      </button>
    </div>
  )
}

export default Product
