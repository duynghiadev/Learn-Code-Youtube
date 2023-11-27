'use client'

import React from 'react'
import Backdrop from '@/app/component/modal/Backdrop'
import CreateModal from '@/app/component/modal/CreateModal'
import DeleteModal from '@/app/component/modal/DeleteModal'
import EditModal from '@/app/component/modal/EditModal'
import { useSelector } from 'react-redux'
import { IRootState } from '@/app/store/store'
import UpdateModal from '@/app/component/modal/UpdateModal'
import UpdateUserPassword from '@/app/component/modal/UpdateUserPassword'

function Modal() {
  const { create, del, edit, update, changePass } = useSelector(
    (state: IRootState) => state.modal,
  )

  return (
    <div className="w-full relative">
      {create && <CreateModal />}
      {del && <DeleteModal />}
      {edit && <EditModal />}
      {update && <UpdateModal />}
      {changePass && <UpdateUserPassword />}
      {(del || create || edit || update || changePass) && <Backdrop />}
    </div>
  )
}

export default Modal
