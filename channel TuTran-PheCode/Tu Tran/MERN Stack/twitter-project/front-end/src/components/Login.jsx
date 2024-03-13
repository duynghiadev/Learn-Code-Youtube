import '../css/Auth.css'
import axios from 'axios'
import AppContext from './AppContext'
import { useHistory } from 'react-router'
import { useContext, useState } from 'react'

const Login = () => {
  const { dispatch } = useContext(AppContext)
  const [userInput, setUserInput] = useState({
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
        url: '/api/v1/auth/login',
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
    // LOGIN
    <section className='auth-container'>
      <form className='auth-form'>
        <h2>Enter Your Account</h2>
        {errorMessage && <div className='error-message'>Error: {errorMessage}</div>}
        <input
          type='email'
          name='email'
          id=''
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
          value={userInput.password}
          onChange={onChangeHandle}
        />
        <button className='btn' type='submit' onSubmit={onSubmitHandle}>
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
