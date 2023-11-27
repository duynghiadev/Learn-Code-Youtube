'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import InputElm from '@/app/ui/InputElm'
import ButtonPrimary from '@/app/ui/ButtonPrimary'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { loginSchema } from '@/app/validate/loginValidate'
import { LoginResponse, TopicsResponse } from '@/generated/model'
import { getTopics } from '@/generated/topic/topic'
import { notification } from 'antd'
import { setTopic } from '@/app/store/slice/booksSlice'
import { signin } from '@/app/store/slice/userSlice'
import { login } from '../../../generated/auth/auth'

const Login = ({ setTab }: { setTab: (value: number) => void }) => {
  const dispatch = useDispatch()
  const route = useRouter()

  const handleLogin = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    await login(values).then(async (res: LoginResponse) => {
      console.log(res.data)
      if (res.data) {
        notification.success({
          message: 'Đăng nhập thành công!',
          description: `Xin chào ${res.data?.email}`,
        })
        dispatch(signin(res.data))
        route.push('/home')
        await getTopics()
          .then((res: TopicsResponse) => {
            if (res.data) {
              dispatch(setTopic(res.data))
            }
            setSubmitting(false)
          })
          .catch((error: ErrorResponse) => {
            notification.error({
              message: error.error,
              description: error.message,
            })
            setSubmitting(false)
          })
      }
    })
  }

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={loginSchema}
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
          className="modal top-[20%] py-p45px px-p20px border-[2px] border-solid rounded-md bg-white dark:bg-bgElm"
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
