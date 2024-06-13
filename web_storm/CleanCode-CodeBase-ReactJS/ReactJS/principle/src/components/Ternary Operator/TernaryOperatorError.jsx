// TernaryOperatorError.js
import React from 'react'

const TernaryOperatorError = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
)

export default TernaryOperatorError
