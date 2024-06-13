import { useState } from 'react'
import { Book, BookList } from '../types'
import { useProcessDialog } from '../utils/hooks'
import Button from './Button'
import Dialog from './Dialog'

interface BookTableProps {
  bookList: BookList
  onDeleteBook?: (id: string | number) => void
  onPopupEditDialog: (id: string | number) => void
}

const BookTable = ({
  bookList,
  onDeleteBook,
  onPopupEditDialog,
}: BookTableProps) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [deletedBook, setDeletedBook] = useState<Book | null>(null)

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const attr = useProcessDialog({
    id: 'delete-book-dialog',
    titleId: 'Delete book',
    triggerValue: openDialog,
    onClose: () => {
      handleCloseDialog()
      setDeletedBook(null)
    },
  })

  const handleDelete = () => {
    handleCloseDialog()
    if (!deletedBook) return

    onDeleteBook?.(deletedBook.id)
  }

  return (
    <>
      <Dialog title="Delete book" attr={attr}>
        <div className="confirm-delete">
          <p>
            Do you want to delete <span>{deletedBook?.title}</span> book?
          </p>
          <div className="confirm-delete__btns">
            <button className="btn btn--delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn btn--cancel" onClick={handleCloseDialog}>
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
      <table className="table" id="book-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList?.length > 0 &&
            bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>
                  <Button
                    className="btn--text"
                    onClick={() => {
                      handleOpenDialog()
                      setDeletedBook(book)
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn--text"
                    onClick={() => onPopupEditDialog(book?.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          {bookList?.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-2">
                No books found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default BookTable
