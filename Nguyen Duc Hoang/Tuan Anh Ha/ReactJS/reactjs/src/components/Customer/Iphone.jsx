import { useContext } from 'react'
import { CompanyContext } from '../../pages/Products'

const Iphone = () => {
  const company = useContext(CompanyContext)
  console.log('company:', company)

  return (
    <div>
      <h4>Iphone</h4>
      <p>This product is imported by {company}</p>
    </div>
  )
}

export default Iphone
