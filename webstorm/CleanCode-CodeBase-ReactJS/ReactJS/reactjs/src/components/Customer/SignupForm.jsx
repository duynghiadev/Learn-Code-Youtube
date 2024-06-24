import { useState } from 'react'

const SignupForm = () => {
  const [customerInputs, setCustomerInputs] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    console.log('name:', name)
    console.log('value:', value)

    setCustomerInputs((inputs) => ({
      ...inputs,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault() // not reloading the web
    console.log('customerInputs:', customerInputs)
  }

  return (
    <div>
      <h3>Sign up Form Now</h3>
      <p>Please sign up to become the member</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' value={customerInputs.name || ''} onChange={handleChange} />
        <br />

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={customerInputs.email || ''}
          onChange={handleChange}
        />
        <br />

        <label>Address:</label>
        <input
          type='text'
          name='address'
          value={customerInputs.address || ''}
          onChange={handleChange}
        />
        <br />

        <input type='submit' value='Sign up' />
      </form>
    </div>
  )
}

export default SignupForm
