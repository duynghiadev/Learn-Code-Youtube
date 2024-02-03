import '../css/Auth.css'

const Register = () => {
  return (
    // REGISTER
    <section className='auth-container'>
      <form className='auth-form'>
        <h2>Register New Account</h2>
        <div className='error-message'>Error: Your Password is not correct</div>
        <input type='text' name='name' id='' placeholder='Name' />
        <input type='email' name='email' id='' required placeholder='Email' />
        <input type='password' name='password' id='' required placeholder='Password' />
        <button className='btn' type='button'>
          Register
        </button>
      </form>
    </section>
  )
}

export default Register
