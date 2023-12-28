import { useState } from 'react'
import { createContext } from 'react'
import Smartphones from '../components/Customer/SmartPhones'

export const CompanyContext = createContext()

const Products = () => {
  const [company, setCompany] = useState('Vinagame')

  return (
    <CompanyContext.Provider value={company}>
      <h3>Products</h3>
      <p>This is page Products</p>
      <Smartphones />
    </CompanyContext.Provider>
  )
}

export default Products

/**
 * Products -> Smartphones -> Iphone
 *
 * => Có nghĩa là ta có thể truyền dữ liệu từ component Products qua component Iphone luôn mà không cần thông qua component Smartphones
 * => Rất tiện lợi và nhanh đúng không mọi người
 */
