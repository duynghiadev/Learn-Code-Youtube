'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { Formik } from 'formik'
import InputElm from '@/app/ui/InputElm'
import ButtonPrimary from '@/app/ui/ButtonPrimary'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { login } from '@/app/store/slice/userSlice'

const Login = ({ setTab }: { setTab: (value: number) => void }) => {
  const dispatch = useDispatch()
  const route = useRouter()
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email không hợp lệ')
      .required('Email là bắt buộc'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
        'Phải chứa ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt',
      ),
  })
  const handleLogin = (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    try {
      route.push('/home')
      dispatch(login({ email: values.email }))
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={schema}
      onSubmit={handleLogin}
    >
      {({
        values,
        handleChange,
        isSubmitting,
        handleSubmit,
        errors,
      }): JSX.Element => (
        <form
          className="modal top-[20%] py-p45px px-p20px border-[2px] border-solid rounded-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-fs24 text-center mb-m30">
            <span className=" text-fs54 text-primary font-bold">Book</span>store
          </h1>
          <div>
            <div className="relative mb-m40">
              <InputElm
                name="email"
                setData={handleChange}
                type="text"
                error={errors.email}
                value={values.email}
              />
              {errors.email && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="relative mb-m50 ">
              <InputElm
                value={values.password}
                name="password"
                setData={handleChange}
                error={errors.password}
                type="password"
              />
              {errors.password && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.password}
                </div>
              )}
            </div>
            <ButtonPrimary
              text={
                isSubmitting ? (
                  <AiOutlineLoading3Quarters className=" animate-spin text-fs16" />
                ) : (
                  'Login'
                )
              }
              type="submit"
            />
            <div className=" mt-m30 flex justify-between items-center text-fs14 opacity-80">
              <button onClick={() => setTab(1)} className=" cursor-pointer">
                Do not have an account?
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default Login
