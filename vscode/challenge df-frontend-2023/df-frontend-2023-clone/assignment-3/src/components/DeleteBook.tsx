import React from 'react'
import { IBook } from '../constant/BookModel'

interface DeleteBookProps {
  closeDeleteBook: () => void
  deleteBook: (book: IBook | null) => void
  bookToDelete: IBook
}

function DeleteBook({
  closeDeleteBook,
  deleteBook,
  bookToDelete,
}: DeleteBookProps): JSX.Element {
  const handleDelete = () => {
    if (bookToDelete) {
      deleteBook(bookToDelete)
    }
    closeDeleteBook()
  }

  return (
    <div id="deleteBookModal" className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Delete book</h2>
          <button className="close" onClick={closeDeleteBook}>
            &times;
          </button>
        </div>
        <div className="modalBody">
          <p className="confirmMessage">
            Do you want to delete <b>{`${bookToDelete?.name}`}</b> book?
          </p>
        </div>

        <div className="modalFooter">
          <div className="confirmAction">
            <button
              type="button"
              className="btnPrimary"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="btnSecondary"
              onClick={closeDeleteBook}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook
