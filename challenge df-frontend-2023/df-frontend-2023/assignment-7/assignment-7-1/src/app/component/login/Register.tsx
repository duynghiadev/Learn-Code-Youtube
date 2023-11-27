'use client'

import React from 'react'
import zxcvbn from 'zxcvbn'
import { Formik } from 'formik'
import InputElm from '@/app/ui/InputElm'
import ButtonPrimary from '@/app/ui/ButtonPrimary'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { notification } from 'antd'
import { signup } from '@/generated/auth/auth'
import { MessageResponse } from '@/generated/model'
import { signUpSchema } from '../../validate/loginValidate'

const Register = ({ setTab }: { setTab: (value: number) => void }) => {
  const checkPasswordStrength = (password: string): string => {
    const result = zxcvbn(password)
    // Trả về đánh giá mức độ mật khẩu từ 0 đến 4 (0 là yếu, 4 là mạnh)
    if (result.score === 0) {
      return 'Rất yếu'
    }
    if (result.score === 1) {
      return 'Yếu'
    }
    if (result.score === 2) {
      return 'Trung bình'
    }
    if (result.score === 3) {
      return 'Mạnh'
    }
    return 'Rất mạnh'
  }

  const handleLogin = (
    values: { email: string; password: string; fullName: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    signup(values)
      .then((res: MessageResponse) => {
        if (res.data) {
          notification.success({
            message: res.data.message,
          })
          setTab(0)
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

  return (
    <Formik
      initialValues={{
        fullName: '',
        password: '',
        email: '',
        confirmPass: '',
      }}
      validationSchema={signUpSchema}
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
          className="top-[5%] modal py-p45px px-p20px border-[2px] border-solid rounded-md bg-white dark:bg-bgElm"
          onSubmit={handleSubmit}
        >
          <h1 className="text-fs24 text-center mb-m30">
            <span className=" text-fs54 text-primary font-bold">Book</span>store
          </h1>
          <div>
            <div className="relative mb-m40">
              <InputElm
                name="fullName"
                setData={handleChange}
                type="text"
                error={errors.fullName}
                value={values.fullName}
              />
              {errors.fullName && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.fullName}
                </div>
              )}
            </div>
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
            <div className="relative mb-m60 ">
              <InputElm
                value={values.password}
                name="password"
                setData={handleChange}
                error={errors.password}
                type="password"
              />

              <div className=" flex justify-between items-center absolute bottom-[-43px] left-[20px] text-primary text-fs14 w-[380px]">
                {errors.password && <div>{errors.password}</div>}
                <div className="ml-auto">
                  Mức độ mật khẩu: {checkPasswordStrength(values.password)}
                </div>
              </div>
            </div>
            <div className="relative mb-m50 ">
              <InputElm
                value={values.confirmPass}
                name="confirmPass"
                setData={handleChange}
                error={errors.confirmPass}
                type="password"
              />
              {errors.confirmPass && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.confirmPass}
                </div>
              )}
            </div>
            <ButtonPrimary
              text={
                isSubmitting ? (
                  <AiOutlineLoading3Quarters className=" animate-spin text-fs16" />
                ) : (
                  'Sign Up'
                )
              }
              type="submit"
            />
            <div className=" mt-m30 flex justify-between items-center text-fs14 opacity-80">
              <button onClick={() => setTab(0)} className=" cursor-pointer">
                Do you have an account?
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default Register
