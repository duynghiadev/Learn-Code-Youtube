import React from 'react'

function SearchResult({ data }) {
  return (
    <div className='search-results'>
      {data.map((user) => (
        <div key={user.id} className='item'>
          {user.name}
        </div>
      ))}
    </div>
  )
}

export default SearchResult
