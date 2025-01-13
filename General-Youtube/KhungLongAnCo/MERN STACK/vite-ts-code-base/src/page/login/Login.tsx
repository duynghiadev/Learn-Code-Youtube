import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Input } from 'components'
import { FormLogin } from 'types'
import { useAuth } from 'hooks'

// Define validation schema using yup
const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  })
  .required()

export const LoginPage: React.FC = () => {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormLogin>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormLogin) => {
    login(data)
  }

  return (
    <div className='max-w-[600px] mx-auto pt-6'>
      <h3 className='text-center'>Login Page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <Input label='Email' name='email' isRequired register={register} error={errors.email?.message} />
        </div>

        <div className='mb-4'>
          <Input label='Password' name='password' isRequired register={register} error={errors.password?.message} />
        </div>

        <Button htmlType='submit' type='primary'>
          Submit
        </Button>
      </form>
    </div>
  )
}
