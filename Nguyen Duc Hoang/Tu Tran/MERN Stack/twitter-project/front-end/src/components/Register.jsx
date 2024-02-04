import '../css/Auth.css'
import AppContext from './AppContext'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useContext, useState } from 'react'

const Register = () => {
  const { dispatch } = useContext(AppContext)
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const history = useHistory()
  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault()
      const option = {
        method: 'post',
        url: '/api/v1/auth/register',
        data: userInput
      }
      const response = await axios(option)
      const { token, userName } = response.data.data
      localStorage.setItem('token', token)
      dispatch({ type: 'CURRENT_USER', payload: { userName } })
      history.push('/')
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    // REGISTER
    <section className='auth-container'>
      <form className='auth-form' onSubmit={onSubmitHandle}>
        <h2>Register New Account</h2>
        {errorMessage && Array.isArray(errorMessage) ? (
          errorMessage.map((err) => <div className='error-message'>Error: {err}</div>)
        ) : (
          <div className='error-message'>Error: {errorMessage}</div>
        )}
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          value={userInput.name}
          onChange={onChangeHandle}
        />
        <input
          type='email'
          name='email'
          id='email'
          required
          placeholder='Email'
          value={userInput.email}
          onChange={onChangeHandle}
        />
        <input
          type='password'
          name='password'
          id=''
          required
          placeholder='Password'
          onChange={onChangeHandle}
        />
        <button className='btn' type='button'>
          Register
        </button>
      </form>
    </section>
  )
}

export default Register
