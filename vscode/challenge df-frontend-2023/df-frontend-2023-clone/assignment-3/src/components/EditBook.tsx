import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { IBook } from '../constant/BookModel'

interface EditBookProps {
  closeEditBook: () => void
  editBook: (book: IBook) => void
  bookToEdit: IBook
}

function EditBook({
  closeEditBook,
  editBook,
  bookToEdit,
}: EditBookProps): JSX.Element {
  const [name, setName] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [topic, setTopic] = useState<string>('Programming')
  const [nameError, setNameError] = useState<boolean>(false)
  const [authorError, setAuthorError] = useState<boolean>(false)

  const topics = [
    { label: 'Programming', value: 'Programming' },
    { label: 'Database', value: 'Database' },
    { label: 'DevOps', value: 'DevOps' },
  ]

  useEffect(() => {
    if (bookToEdit) {
      setName(bookToEdit.name || '')
      setAuthor(bookToEdit.author || '')
      setTopic(bookToEdit.topic || '')
    }
    // eslint-disable-next-line
  }, [])

  function validateInput() {
    if (name.trim() === '') {
      setNameError(true)
    }
    if (author.trim() === '') {
      setAuthorError(true)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value)
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validateInput()
    if (name.trim() === '' || author.trim() === '') {
      return
    }

    // Assuming that currentBook contains the ID of the book being edited
    const editedBook: IBook = {
      id: bookToEdit.id,
      name,
      author,
      topic,
    }

    editBook(editedBook)
    // console.log("Updated book:", editedBook);

    setName('')
    setAuthor('')
    setTopic('')
    closeEditBook()
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Edit book</h2>
          <button className="close" onClick={closeEditBook}>
            &times;
          </button>
        </div>
        <form onSubmit={submit}>
          <div className="modalBody">
            <div className="fieldInput">
              <label htmlFor="fieldName">
                Name
                <input
                  type="text"
                  placeholder="Book name"
                  id="fieldName"
                  name="fieldName"
                  autoFocus
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    setNameError(false)
                  }}
                />
              </label>
              {nameError && (
                <p className="errorMessage">Name field is required.</p>
              )}
            </div>
            <div className="fieldInput">
              <label htmlFor="fieldAuthor">
                Author
                <input
                  type="text"
                  placeholder="Author"
                  id="fieldAuthor"
                  name="fieldAuthor"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value)
                    setAuthorError(false)
                  }}
                />
              </label>
              {authorError && (
                <p className="errorMessage">Author field is required.</p>
              )}
            </div>
            <div className="fieldInput">
              <label htmlFor="fieldTopic">
                Topic
                <select onChange={handleChange} value={topic}>
                  {topics.map((topic, index) => (
                    <option key={index} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="modalFooter">
            <button type="submit" className="btnPrimary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBook
