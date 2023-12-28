import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams()

  return (
    <div>
      <h2>This is detail product</h2>
      <h3>{params.name}</h3>
      <p>{params.id}</p>
    </div>
  )
}

export default Product
