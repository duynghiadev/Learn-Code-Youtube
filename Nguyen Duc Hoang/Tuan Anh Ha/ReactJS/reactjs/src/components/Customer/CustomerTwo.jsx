import CustomerInfo from './CustomerInfo'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignupForm from './SignupForm'

const CustomerTwo = () => {
  const info = {
    name: 'Jon Doe',
    email: 'abc@gmail.com',
    location: 'Vietnam',
    company: 'Example company',
    isMember: false
  }

  const handleBuy = () => {
    console.log('Sending order...')
    toast('Thank you!')
  }

  return (
    <div>
      <h2>Customer Two</h2>
      <p>I am a function component</p>
      {info.isMember ? <CustomerInfo info={info} /> : <SignupForm />}
      <hr />
      <button onClick={handleBuy}>Buy Now</button>
      <ToastContainer />
    </div>
  )
}

export default CustomerTwo
