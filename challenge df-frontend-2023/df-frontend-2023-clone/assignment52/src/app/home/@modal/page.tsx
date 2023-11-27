'use client'

import React from 'react'
import Backdrop from '@/app/component/modal/Backdrop'
import CreateModal from '@/app/component/modal/CreateModal'
import DeleteModal from '@/app/component/modal/DeleteModal'
import EditModal from '@/app/component/modal/EditModal'
import { useSelector } from 'react-redux'
import { IRootState } from '@/app/store/store'

function Modal() {
  const { create, del, edit } = useSelector((state: IRootState) => state.modal)

  return (
    <div className="w-full relative">
      {create && <CreateModal />}
      {del && <DeleteModal />}
      {edit && <EditModal />}
      {(del || create || edit) && <Backdrop />}
    </div>
  )
}

export default Modal
