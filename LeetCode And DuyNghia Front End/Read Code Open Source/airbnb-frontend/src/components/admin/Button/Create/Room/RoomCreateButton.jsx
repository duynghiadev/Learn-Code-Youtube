import React, { useState } from 'react'
import RoomForm from './RoomForm'

const RoomCreateButton = () => {
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <div className='px-6 my-6'>
        <button
          className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple'
          onClick={() => setShowModal(!showModal)}
        >
          Thêm phòng thuê
          <span className='ml-2' aria-hidden='true'>
            +
          </span>
        </button>
      </div>
      {showModal && <RoomForm closeModal={closeModal} />}
    </>
  )
}

export default RoomCreateButton
