import './App.css'
import { useForm } from 'react-hook-form'

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('data:', data)
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

      <label htmlFor='name'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        {...register('password', { required: true, minLength: 6 })}
      />

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
    </form>
  )
}
