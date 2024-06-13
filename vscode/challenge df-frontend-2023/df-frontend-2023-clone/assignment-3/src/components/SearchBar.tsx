import React, { useState, FormEvent } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="searchContainer">
      <form id="searchForm" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search books"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="icon">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
