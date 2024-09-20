import React from 'react'
import { roomServ } from '../../../../../api/api'
import { message } from 'antd'

function RoomConfirmDeleteModal({ closeConfirmDeleteModal, room, fetch }) {
  const deleteRoom = () => {
    console.log(room)
    roomServ
      .deleteRoom(room.id)
      .then((response) => {
        message.info(response.data.message)
        closeConfirmDeleteModal()
        // load lai du lieu moi
        fetch()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div
      className='fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'
      style={{ marginLeft: 0 }}
    >
      <div
        className='w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl'
        role='dialog'
        id='modal'
      >
        <header className='flex justify-end'>
          <button
            className='inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700'
            aria-label='close'
            onClick={closeConfirmDeleteModal}
          >
            <svg
              className='w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              role='img'
              aria-hidden='true'
            >
              <path
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
                fillRule='evenodd'
              ></path>
            </svg>
          </button>
        </header>
        <div className='mt-4 mb-6'>
          <p className='mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300'>
            Xác nhận xoá phòng
          </p>
          <p className='text-sm text-gray-700 dark:text-gray-400'>
            Bạn có chắc chắn muốn xoá phòng <b className='text-primary'>{room.tenPhong}</b> ? <br />
            <i>
              Thao tác tiếp theo <b>không</b> thể hoàn tác.
            </i>
          </p>
        </div>
        <footer className='flex items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flexRow bg-gray-50 dark:bg-gray-800'>
          <button
            onClick={closeConfirmDeleteModal}
            className='w-full px-5 py-3 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'
          >
            Huỷ
          </button>
          <button
            className='w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple'
            onClick={deleteRoom}
          >
            Xoá
          </button>
        </footer>
      </div>
    </div>
  )
}

export default RoomConfirmDeleteModal
