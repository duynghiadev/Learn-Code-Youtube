import { useHistory } from 'react-router-dom'
import './Register.scss'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { registerNewUser } from '../../services/userService'

const Register = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true
  }
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput)

  let history = useHistory()

  const handleLogin = () => {
    history.push('/login')
  }

  useEffect(() => {
    // axios.get('http://localhost:8080/api/v1/test-api').then((data) => {
    //   console.log('>>> check data axios:', data)
    // })
  }, [])

  const isValidInput = () => {
    setObjCheckInput(defaultValidInput)

    if (!email) {
      toast.error('Email is required')
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false })
      return false
    }

    let regx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regx.test(email)) {
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false })
      toast.error('Please enter a valid email address')
      return false
    }

    let regxPhone =
      /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i

    if (!regxPhone.test(phone)) {
      setObjCheckInput({ ...defaultValidInput, isValidPhone: false })
      toast.error('Phone is required')
      return false
    }

    if (!password) {
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false })
      toast.error('Password is required')
      return false
    }

    if (password !== confirmPassword) {
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false })
      toast.error('Your password is not the same')
      return false
    }
    return true
  }

  const handleRegister = async () => {
    let check = isValidInput()

    if (check === true) {
      let serverData = await registerNewUser(email, phone, username, password)
      if (+serverData.EC === 0) {
        toast.success(serverData.EM)
        history.push('/login')
      } else {
        toast.error(serverData.EM)
      }
    }
  }

  return (
    <div className='register-container'>
      <div className='container'>
        <div className='row px-3 px-sm-0'>
          <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
            <div className='brand'>Duy Nghia Dev</div>
            <div className='detail'>
              Duy Nghia Dev helps you connect and share with the people in your life.
            </div>
          </div>
          <div className='content-right green col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
            <div className='brand d-sm-none'>Duy Nghia Dev</div>
            <div className='form-group'>
              <label>Email:</label>
              <input
                type='text'
                className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'}
                placeholder='Email'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </div>
            <div className='form-group'>
              <label>Phone number:</label>
              <input
                type='text'
                className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'}
                placeholder='Phone number'
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Username:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input
                type='password'
                className={
                  objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'
                }
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Re-enter password:</label>
              <input
                type='password'
                className={
                  objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'
                }
                placeholder='Re-enter password'
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button className='btn btn-primary' type='submit' onClick={() => handleRegister()}>
              Register
            </button>
            <hr />
            <div className='text-center'>
              <button className='btn btn-success' onClick={() => handleLogin()}>
                Already've an account. Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
