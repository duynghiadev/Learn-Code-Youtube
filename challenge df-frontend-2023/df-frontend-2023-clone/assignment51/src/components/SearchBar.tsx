import React, { FormEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchBarProps {
  onSearch: (query: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="flex justify-between">
      <form id="searchForm" onSubmit={handleSearch}>
        <input
          className="outline-none box-border p-2 text-base rounded-l-lg border transition focus:border-gray-500 dark:bg-white"
          type="search"
          placeholder="Search books"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="float-right px-3 py-3 mr-4 bg-gray-300 transition hover:bg-gray-400 border border-gray-400 rounded-r-lg cursor-pointer"
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
