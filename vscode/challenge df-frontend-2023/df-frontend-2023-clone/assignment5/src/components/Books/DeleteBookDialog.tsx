import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { PATHS } from '@/src/lib/constants'
import Dialog from '@/src/components/Dialog'
import { useBooksContext } from '@/src/contexts/BooksContext'
import {
  DIALOG_TYPE,
  useBooksDialogContext,
} from '@/src/contexts/BooksDialogContext'

export default function DeleteBookDialog() {
  const router = useRouter()
  const pathname = usePathname()
  const { deleteBook } = useBooksContext()
  const { dialogProps, dialogType, hideDialogs } = useBooksDialogContext()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    dialog?.addEventListener('close', hideDialogs)

    return () => dialog?.removeEventListener('close', hideDialogs)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (dialogType === DIALOG_TYPE.DELETE) {
      handleShow()
    } else {
      handleHide()
    }
  }, [dialogType])

  const handleDelete = async () => {
    await deleteBook(dialogProps?.book.id ?? '')

    if (pathname !== PATHS.BOOK.ROOT) {
      router.replace(PATHS.BOOK.ROOT)
    }

    dialogRef?.current?.close()
  }

  const handleShow = () => dialogRef?.current?.showModal()

  const handleHide = () => dialogRef?.current?.close()

  return (
    <Dialog
      ref={dialogRef}
      title="Delete book"
      actions={[
        {
          onClick: handleHide,
          className: 'flex-1',
          label: 'Cancel',
        },
        {
          variant: 'error',
          onClick: handleDelete,
          className: 'flex-1',
          label: 'OK',
        },
      ]}
    >
      <p>
        Do you want to delete the book{' '}
        <span className="font-medium italic">
          {dialogProps?.book.title ?? ''}
        </span>
        ?
      </p>
    </Dialog>
  )
}
