import { useState } from 'react'

const SignupForm = () => {
  const [customerName, setCustomerName] = useState('')

  const handleChange = (event) => {
    setCustomerName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // not reloading the web
    alert(`Thank you ${customerName} for signing up.`)
  }

  return (
    <div>
      <h3>Sign up Form Now</h3>
      <p>Please sign up to become the member</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' value={customerName} onChange={handleChange} />
        <input type='submit' value='Sign up' />
      </form>
    </div>
  )
}

export default SignupForm
