'use client'

import React from 'react'
import { Formik } from 'formik'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '@/app/store/store'
import { closeModal } from '@/app/store/slice/modalSlice'
import { notification } from 'antd'
import { setReload } from '@/app/store/slice/booksSlice'
import { updateBook } from '@/generated/book/book'
import { BookResponse, UpdateBookRequest } from '@/generated/model'
import InputElm from '../../ui/InputElm'
import ButtonPrimary from '../../ui/ButtonPrimary'
import { createBookSchema } from '../../validate/bookValidate'

const EditModal = () => {
  const dispatch = useDispatch()
  const edit = useSelector((state: IRootState) => state.modal.edit)
  const topic = useSelector((state: IRootState) => state.books.topic)
  if (!edit) {
    dispatch(closeModal())
    return null
  }
  const handleLogin = (
    values: { name: string; author: string; topic: number },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    if (edit) {
      const data: UpdateBookRequest = {}
      if (values.topic !== edit.topic?.id) {
        data.topicId = values.topic
      }
      if (values.author !== edit.author) {
        data.author = values.author
      }
      if (values.name !== edit.name) {
        data.author = values.name
      }
      console.log(edit.id, data)

      updateBook(edit.id, data)
        .then((res: BookResponse) => {
          if (res.data) {
            notification.success({
              message: `Chỉnh sửa thành công! ${res.data?.id}`,
            })
            dispatch(setReload())
            dispatch(closeModal())
          }
          setSubmitting(false)
        })
        .catch((error: ErrorResponse) => {
          console.log(error)

          notification.error({
            message: error.error,
            description: error.message,
          })
          setSubmitting(false)
        })
    }
  }

  return (
    <Formik
      initialValues={{
        name: edit.name,
        author: edit.author ? edit.author : '',
        topic: edit.topic?.id ? edit.topic.id : 0,
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
            <h2 className=" text-[28px] font-bold">Edit book</h2>
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
                  value={values.topic}
                  name="topic"
                  id="topic"
                  className="w-full p-p10px border-[2px] border-solid border-[var(--border)] rounded-md font-normal bg-[var(--backgroundElm)]"
                >
                  <option value="Chose Topic">Chose Topic</option>
                  {topic &&
                    topic.map((item) => (
                      <option value={item.id} key={item.id}>
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
                  'Edit'
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

export default EditModal
