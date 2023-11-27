'use client'

import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/app/store/slice/modalSlice'
import { addBook } from '@/app/store/slice/booksSlice'
import ButtonPrimary from '../../ui/ButtonPrimary'
import InputElm from '../../ui/InputElm'

const CreateModal = () => {
  const dispatch = useDispatch()

  const schema = yup.object().shape({
    author: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, 'Tên tác giả chỉ chứa chữ cái và khoảng trắng')
      .required('Tên tác giả là bắt buộc'),
    name: yup
      .string()
      .min(5, 'Tên sách phải có ít nhất 5 ký tự')
      .required('Tên sách là bắt buộc'),
    topic: yup
      .string()
      .oneOf(['Programming', 'Database', 'DevOps'], 'Chọn một chủ đề hợp lệ')
      .required('Chủ đề sách là bắt buộc'),
  })

  const handleLogin = (
    values: { name: string; author: string; topic: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    try {
      console.log(values)
      dispatch(addBook(values))
      dispatch(closeModal())
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        author: '',
        topic: '',
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
          className="modal top-[20%] bg-[var(--backgroundElm)] px-p20px py-p30px rounded-md animate-fadeInOut shadow-md"
          onSubmit={handleSubmit}
        >
          <header className="flex justify-between items-center mb-m40">
            <h2 className=" text-[28px] font-bold">
              <span className="text-primary">Add</span> book
            </h2>
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
            <div className="relative mb-m40">
              <InputElm
                name="name"
                setData={handleChange}
                type="text"
                error={errors.name}
                value={values.name}
              />
              {errors.name && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.name}
                </div>
              )}
            </div>
            <div className="relative mb-m30 ">
              <InputElm
                value={values.author}
                name="author"
                setData={handleChange}
                error={errors.author}
                type="text"
              />
              {errors.author && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.author}
                </div>
              )}
            </div>
            <div className="relative mb-m40 ">
              <label className="font-bold flex flex-col mb-m5" htmlFor="topic">
                Topic
                <select
                  onChange={handleChange}
                  name="topic"
                  id="topic"
                  className="w-full p-p10px border-[2px] border-solid border-[var(--border)] rounded-md font-normal bg-[var(--backgroundElm)]"
                >
                  <option value="Chose Topic">Choose Topic</option>
                  <option value="Programming">Programming</option>
                  <option value="Database">Database</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </label>

              {errors.topic && (
                <div className="absolute bottom-[-30px] left-[20px] text-primary text-fs14">
                  {errors.topic}
                </div>
              )}
            </div>
            <ButtonPrimary
              text={
                isSubmitting ? (
                  <AiOutlineLoading3Quarters className=" animate-spin text-fs16" />
                ) : (
                  'Create'
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

export default CreateModal
