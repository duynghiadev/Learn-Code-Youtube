const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault() // not reloading the web
    alert('Thank you for signing up...')
  }

  const handleChange = (event) => {
    event.preventDefault() // not reloading the web
    console.log('handle change...')
  }

  return (
    <div>
      <h3>Sign up Form Now</h3>
      <p>Please sign up to become the member</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' onChange={handleChange} />
        <input type='submit' value='Sign up' />
      </form>
    </div>
  )
}

export default SignupForm
