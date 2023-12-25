import CustomerInfo from './CustomerInfo'

const CustomerTwo = () => {
  return (
    <div>
      <h2>Customer Two</h2>
      <p>I am a function component</p>
      <CustomerInfo name='Jon Doe' email='abc@gmail.com' />
    </div>
  )
}

export default CustomerTwo
