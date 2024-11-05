import { useEffect, useState } from 'react'

const ProductCardsUseTransition = ({ name }: { name: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log('name in component ProductCardsUseTransition:', name)
    // Tính toán nặng
    const SIZE = 19999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProducts(result)
  }, [name])

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}

export default ProductCardsUseTransition
