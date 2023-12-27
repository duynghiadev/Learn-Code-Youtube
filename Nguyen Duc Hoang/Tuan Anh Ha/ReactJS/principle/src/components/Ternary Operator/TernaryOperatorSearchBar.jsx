// TernaryOperatorSearchBar.js
import React, { useState, useCallback } from 'react'
import { useEffect } from 'react'

const TernaryOperatorSearchBar = ({ onFilterChange }) => {
  const [keyword, setKeyword] = useState('')

  const handleChange = useCallback(
    (event) => {
      const newKeyword = event.target.value
      setKeyword(newKeyword)
      onFilterChange(newKeyword)
    },
    [onFilterChange]
  )

  useEffect(() => {
    if (!keyword) {
      // Nếu keyword rỗng, gửi danh sách ban đầu về
      onFilterChange('')
    }
  }, [keyword, onFilterChange])

  return (
    <input type='text' placeholder='Filter by title...' value={keyword} onChange={handleChange} />
  )
}

export default TernaryOperatorSearchBar
