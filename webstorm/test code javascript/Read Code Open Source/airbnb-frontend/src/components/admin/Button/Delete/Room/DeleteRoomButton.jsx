import React, { useState } from 'react'
import RoomConfirmDeleteModal from './RoomConfirmDeleteModal'

const DeleteRoomButton = ({ room, fetch }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const closeConfirmDeleteModal = () => {
    setShowDeleteConfirm(false)
  }
  return (
    <>
      <button
        className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-primary-dark focus:outline-none focus:shadow-outline-gray'
        aria-label='Delete'
        onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
      >
        <svg className='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      {showDeleteConfirm && (
        <RoomConfirmDeleteModal
          closeConfirmDeleteModal={closeConfirmDeleteModal}
          room={room}
          fetch={fetch}
        />
      )}
    </>
  )
}

export default DeleteRoomButton
