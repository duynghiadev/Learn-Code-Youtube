import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [submissionResult, setSubmissionResult] = useState(null)

  const onSubmit = (data) => {
    console.log('data:', data)
    setSubmissionResult(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>

      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Your Name'
        {...register('name', { required: true })}
      />
      {errors.name && <span className='error'>Name is required</span>}

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        {...register('password', { required: true, minLength: 6 })}
      />
      {errors.password && (
        <span className='error'>
          {errors.password.type === 'required' && 'Password is required'}
          {errors.password.type === 'minLength' &&
            'Password must be at least 6 characters'}
        </span>
      )}

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Your Email'
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        })}
      />
      {errors.email && (
        <span className='error'>
          {errors.email.type === 'required' && 'Email is required'}
          {errors.email.type === 'pattern' && 'Invalid Email Address'}
        </span>
      )}

      {Object.keys(errors).length !== 0 && (
        <ul className='error-container'>
          {errors.name?.type === 'required' && <li>Name is required</li>}
          {errors.password?.type === 'required' && (
            <li>Password is required</li>
          )}
          {errors.password?.type === 'minLength' && (
            <li>Password must be at least 6 characters</li>
          )}
          {errors.email?.type === 'required' && <li>Email is required</li>}
          {errors.email?.type === 'pattern' && <li>Invalid Email Address</li>}
        </ul>
      )}

      <button type='submit'>Submit</button>

      {submissionResult && (
        <div>
          <h2>Submission Result:</h2>
          <p>Name: {submissionResult.name}</p>
          <p>Email: {submissionResult.email}</p>
        </div>
      )}
    </form>
  )
}
