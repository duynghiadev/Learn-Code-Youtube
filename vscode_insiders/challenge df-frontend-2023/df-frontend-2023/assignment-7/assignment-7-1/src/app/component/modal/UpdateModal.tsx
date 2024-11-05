'use client'

import React, { ChangeEvent, useState } from 'react'
import { Formik } from 'formik'
import InputElm from '@/app/ui/InputElm'
import ButtonPrimary from '@/app/ui/ButtonPrimary'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/app/store/slice/modalSlice'
import { notification } from 'antd'
import { updateUser } from '@/generated/user/user'
import { UpdateUserRequest, UserResponse } from '@/generated/model'
import { userSchema } from '../../validate/userValidate'

const UpdateModal = () => {
  const dispatch = useDispatch()

  const [fileUpload, setfileUpload] = useState<string>()

  const handleChooseFile = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          const base64Image = event.target.result as string
          setfileUpload(base64Image)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleLogin = (
    values: { fullName: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    const form: UpdateUserRequest = {
      avatar: fileUpload,
      fullName: values.fullName,
    }
    updateUser(form)
      .then((res: UserResponse) => {
        if (res.data) {
          notification.success({
            message: 'Cập nhật thành công!',
          })
          dispatch(closeModal())
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
      }}
      validationSchema={userSchema}
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
          className=" bg-white dark:bg-bgElm top-[15%] modal py-p45px px-p20px border-[2px] border-solid rounded-md animate-fadeInOut"
          onSubmit={handleSubmit}
        >
          <header className="flex justify-between items-center mb-m40">
            <h2 className=" text-[28px] font-bold">Update User</h2>
            <button
              id="close-button"
              className="btn"
              onClick={() => dispatch(closeModal())}
              aria-label="Close"
            >
              X
            </button>
          </header>
          <div>
            <div className="mb-m30">
              <input type="file" onChange={handleChooseFile} alt="avartar" />
            </div>
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

            <ButtonPrimary
              text={
                isSubmitting ? (
                  <AiOutlineLoading3Quarters className=" animate-spin text-fs16" />
                ) : (
                  'Update'
                )
              }
              type="submit"
            />
          </div>
        </form>
      )}
    </Formik>
  )
}

export default UpdateModal
