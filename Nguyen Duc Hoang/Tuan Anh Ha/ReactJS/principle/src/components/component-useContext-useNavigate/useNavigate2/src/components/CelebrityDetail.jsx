// components/CelebrityDetail.js
import React from 'react'

const CelebrityDetail = ({ celebrity }) => {
  return (
    <div>
      <h2>Celebrity Detail</h2>
      {celebrity && (
        <div>
          <p>
            Name: {celebrity.name.first} {celebrity.name.last}
          </p>
          <p>Email: {celebrity.email}</p>
          <p>Phone: {celebrity.phone}</p>
        </div>
      )}
    </div>
  )
}

export default CelebrityDetail
