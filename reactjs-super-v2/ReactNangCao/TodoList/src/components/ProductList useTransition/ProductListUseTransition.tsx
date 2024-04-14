import React, { useDeferredValue, useState, useTransition } from 'react'
import ProductCardsUseTransition from './ProductCards'

const ProductListUseTransition = (props: any) => {
  const [name, setName] = useState<string>('')
  const [deferredName, setDeferredName] = useState<string>('')
  const [pending, startTransition] = useTransition()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)
    startTransition(() => {
      setDeferredName(value)
    })
  }

  console.log('pending in function handleChange, I use hook useTransition:', pending)

  return (
    <div>
      <h1>Product List</h1>
      <input type='text' value={name} onChange={handleChange} placeholder='type to render' autoFocus={true} />
      {pending && <div>Loading...</div>}
      {!pending && <ProductCardsUseTransition name={deferredName} />}
    </div>
  )
}

export default ProductListUseTransition
