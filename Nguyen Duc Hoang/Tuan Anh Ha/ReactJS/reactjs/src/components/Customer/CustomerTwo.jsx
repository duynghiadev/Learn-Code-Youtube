import CustomerInfo from './CustomerInfo'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomerTwo = () => {
  const info = {
    name: 'Jon Doe',
    email: 'abc@gmail.com',
    location: 'Vietnam',
    company: 'Example company'
  }

  const handleBuy = () => {
    console.log('Sending order...')
    toast('Thank you!')
  }

  return (
    <div>
      <h2>Customer Two</h2>
      <p>I am a function component</p>
      <CustomerInfo info={info} />
      <button onClick={handleBuy}>Buy Now</button>
      <ToastContainer />
    </div>
  )
}

export default CustomerTwo
