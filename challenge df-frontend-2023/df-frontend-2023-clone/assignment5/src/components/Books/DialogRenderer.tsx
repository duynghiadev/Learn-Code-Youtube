'use client'

import {
  DIALOG_TYPE,
  useBooksDialogContext,
} from '@/src/contexts/BooksDialogContext'
import AddEditDialog from './AddEditBookDialog'
import DeleteDialog from './DeleteBookDialog'

export default function DialogRenderer() {
  const { dialogType } = useBooksDialogContext()

  return (
    <>
      {(dialogType === DIALOG_TYPE.ADD || dialogType === DIALOG_TYPE.EDIT) && (
        <AddEditDialog />
      )}
      {dialogType === DIALOG_TYPE.DELETE && <DeleteDialog />}
    </>
  )
}
