'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '@/app/store/slice/modalSlice'
import { IRootState } from '@/app/store/store'
import { notification } from 'antd'
import { setReload } from '@/app/store/slice/booksSlice'
import { deleteBook } from '@/generated/book/book'
import { MessageResponse } from '@/generated/model'
import ButtonPrimary from '../../ui/ButtonPrimary'

const DeleteModal = () => {
  const dispatch = useDispatch()
  const nameBookDelete = useSelector(
    (state: IRootState) => state.books.nameBookDelete,
  )

  async function onClickDelete() {
    if (nameBookDelete && nameBookDelete.id) {
      deleteBook(nameBookDelete.id)
        .then((res: MessageResponse) => {
          if (res.data) {
            notification.success({
              message: res.data.message,
            })
            dispatch(setReload())
          }
        })
        .catch((error: ErrorResponse) => {
          notification.error({
            message: error.error,
            description: error.message,
          })
        })

      dispatch(closeModal())
    }
  }
  return (
    <section
      id="delete-modal"
      className="modal top-[20%] bg-white dark:bg-bgElm px-p20px py-p30px rounded-md animate-fadeInOut"
    >
      <header className="flex justify-between items-center mb-m40">
        <h2 className=" text-[22px] font-bold text-center w-full">
          Delete book
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
      <main>
        <p className="text-center text-[18px]">
          Do you want to delete
          <br />
          <span id="name-delete" className="font-bold">
            {nameBookDelete?.name}
          </span>{' '}
          book?
        </p>
      </main>
      <footer className="flex justify-center items-center gap-20 mt-m30">
        <button
          onClick={onClickDelete}
          id="btn-delete-confirm"
          className=" font-bold text-[var(--border)] hover:text-primary hover:scale-110"
        >
          Delete
        </button>
        <ButtonPrimary text="Cancel" onClick={closeModal} width={100} />
      </footer>
    </section>
  )
}

export default DeleteModal
