import CustomerInfo from './CustomerInfo'

const CustomerTwo = () => {
  const info = {
    name: 'Jon Doe',
    email: 'abc@gmail.com',
    location: 'Vietnam',
    company: 'Example company'
  }

  return (
    <div>
      <h2>Customer Two</h2>
      <p>I am a function component</p>
      <CustomerInfo info={info} />
    </div>
  )
}

export default CustomerTwo
