import { useDeferredValue, useState } from 'react'
import ProductCards from './ProductCards'

const ProductList = (props: any) => {
  const [name, setName] = useState<string>('')
  const deferredName = useDeferredValue(name)

  return (
    <div>
      <h1>Product List</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='type to render'
        autoFocus={true}
      />
      <ProductCards name={deferredName} />
    </div>
  )
}

export default ProductList
