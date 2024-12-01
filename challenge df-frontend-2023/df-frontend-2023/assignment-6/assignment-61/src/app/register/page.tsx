'use client'

import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registerSchema, RegisterSchemaType } from '../../schemas/register'
import useAuth from '../../hooks/useAuth'

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const Router = useRouter()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { signup, isAuthenticated } = useAuth()
  const [registerError, setRegisterError] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: 'doo',
      email: 'doo@gmail.com',
      password: 'Doocharsiu1@',
      passwordConfirmation: 'Doocharsiu1@',
    },
  })

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    const { fullName, email, password } = data
    try {
      setIsLoading(true)
      await signup({ fullName, email, password }, () => {
        Router.push('/books')
      })
    } catch (error) {
      console.error('Sign up error:', error)
      reset()
      setRegisterError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/books')
    }
  }, [Router, isAuthenticated])

  const handleLogin = () => {
    Router.push('/')
  }

  return (
    <div className="w-full h-full block px-1 pt-16 left-0 right-0 overflow-auto z-10 bg-transparent dark:bg-slate-800">
      <div className="m-auto bg-white dark:bg-slate-800 p-5 border rounded-md w-96 shadow-2xl popoutModal animation-popoutModal">
        <h1 className="text-4xl text-[#d2445a] dark:text-white font-bold p-5 text-center">
          Bookstore
        </h1>
        <div className="block mb-2 text-base font-bold text-gray-700 dark:text-white">
          Already have an account?{' '}
          <button onClick={handleLogin} className="text-red-400">
            Login
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col align-middle justify-center">
            <label
              htmlFor="fullName"
              className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
            >
              Fullname (*)
              <input
                {...register('fullName')}
                className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                placeholder="Enter your fullname"
                id="fullName"
                autoFocus
                autoComplete="on"
              />
              {errors.fullName && (
                <p className="text-sm font-bold text-red-400">
                  {errors.fullName.message}
                </p>
              )}
            </label>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
            >
              Email (*)
              <input
                {...register('email')}
                className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                placeholder="Enter your email"
                id="email"
                autoFocus
                autoComplete="on"
              />
              {errors.email && (
                <p className="text-sm font-bold text-red-400">
                  {errors.email.message}
                </p>
              )}
            </label>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
            >
              Password (*)
              <input
                {...register('password')}
                className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="password"
                placeholder="Enter your password"
                id="password"
                autoComplete="on"
              />
              {errors.password && (
                <p className="text-sm font-bold text-red-400">
                  {errors.password.message}
                </p>
              )}
            </label>
            <label
              htmlFor="passwordConfirmation"
              className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
            >
              Confirm password (*)
              <input
                {...register('passwordConfirmation')}
                className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="password"
                placeholder="Enter your password confirmation"
                id="passwordConfirmation"
                autoComplete="on"
              />
              {errors.passwordConfirmation && (
                <p className="text-sm font-bold text-red-400">
                  {errors.passwordConfirmation.message}
                </p>
              )}
            </label>
          </div>
          {registerError && (
            <p className="text-sm font-bold text-red-400">{registerError}</p>
          )}
          <button
            type="submit"
            className={`btn-primary w-full ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Registering in...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
