'use client'

import React from 'react'
import { Formik } from 'formik'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '@/app/store/slice/modalSlice'
import { IRootState } from '@/app/store/store'
import { createBook } from '@/generated/book/book'
import { notification } from 'antd'
import { setReload } from '@/app/store/slice/booksSlice'
import { BookResponse, CreateBookRequest } from '@/generated/model'
import InputElm from '../../ui/InputElm'
import ButtonPrimary from '../../ui/ButtonPrimary'
import { createBookSchema } from '../../validate/bookValidate'

const CreateModal = () => {
  const dispatch = useDispatch()
  const topic = useSelector((state: IRootState) => state.books.topic)

  const handleLogin = (
    values: { name: string; author: string; topic: number },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    const id = parseInt(values.topic.toString(), 10)
    const data: CreateBookRequest = {
      name: values.name,
      author: values.author,
      topicId: id,
    }
    createBook(data)
      .then((res: BookResponse) => {
        if (res.data) {
          notification.success({
            message: 'Thêm thành công!',
          })
          dispatch(setReload())
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
        name: '',
        author: '',
        topic: 0,
      }}
      validationSchema={createBookSchema}
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
          className="modal top-[20%] bg-white dark:bg-bgElm px-p20px py-p30px rounded-md animate-fadeInOut shadow-md"
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
                  className="w-full p-p10px border-[2px] border-solid border-border rounded-md font-normal bg-white dark:bg-bgElm"
                >
                  <option value="Chose Topic" className="text-text">
                    Choose Topic
                  </option>
                  {topic &&
                    topic.map((item) => (
                      <option
                        value={item.id}
                        key={item.id}
                        className="text-text"
                      >
                        {item.name}
                      </option>
                    ))}
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
