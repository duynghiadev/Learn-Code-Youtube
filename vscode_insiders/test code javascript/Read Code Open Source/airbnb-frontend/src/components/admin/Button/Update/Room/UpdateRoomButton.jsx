import React from 'react'
import { useState } from 'react'
import UpdateForm from '../User/UpdateForm'
import UpdateRoomForm from './UpdateRoomForm'

const UpdateRoomButton = ({ room, fetch, locations }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const closeUpdateForm = () => {
    setShowUpdateForm(false)
  }
  return (
    <>
      <button
        className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-primary-dark focus:outline-none focus:shadow-outline-gray'
        aria-label='Edit'
        onClick={() => setShowUpdateForm(!showUpdateForm)}
      >
        <svg className='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
        </svg>
      </button>
      {showUpdateForm && (
        <UpdateRoomForm
          closeUpdateForm={closeUpdateForm}
          room={room}
          fetch={fetch}
          locations={locations}
        />
      )}
    </>
  )
}

export default UpdateRoomButton
