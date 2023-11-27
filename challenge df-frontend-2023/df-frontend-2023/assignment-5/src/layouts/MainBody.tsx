'use client'

import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import TableBook from '../components/TableBook'
import AddBook from '../components/AddBook'
import Toast from '../components/Toast'
import { useBookContext } from '../contexts/bookContext'

function MainBody(): JSX.Element {
  const { showToast, setCurrentPage, searchBooks } = useBookContext()
  const [addModal, setAddModal] = useState(false)

  const handleAddBook = () => {
    setAddModal(true)
  }

  const handleCloseAddBook = () => {
    setAddModal(false)
  }

  const handleSearch = (query: string) => {
    searchBooks(query)
    setCurrentPage(1)
  }

  return (
    <>
      <div className="flex justify-between m-8 px-20 pt-8">
        <SearchBar onSearch={handleSearch} />
        <button type="submit" className="btn-primary" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
      {addModal && <AddBook closeAddBook={handleCloseAddBook} />}
      {showToast && <Toast />}
      <TableBook />
    </>
  )
}

export default MainBody
