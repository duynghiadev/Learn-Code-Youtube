import React, { useState, ChangeEvent, FormEvent } from 'react'
import { IBook } from '../constant/BookModel'

interface AddBookProps {
  closeAddBook: () => void
  addBook: (book: IBook) => void
}

function AddBook({ closeAddBook, addBook }: AddBookProps): JSX.Element {
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

    const bookId = Math.floor(Math.random() * 1000)
    const newBook: IBook = {
      id: bookId,
      name,
      author,
      topic,
    }

    addBook(newBook)
    // console.log('New Book:', newBook);

    setName('')
    setAuthor('')
    setTopic('')

    closeAddBook()
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Add book</h2>
          <button className="close" onClick={closeAddBook}>
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
                <select id="fieldTopic" onChange={handleChange} value={topic}>
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook
