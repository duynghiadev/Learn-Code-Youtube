// TernaryOperatorPostList.js
import React from 'react'

const TernaryOperatorPostList = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
)

export default TernaryOperatorPostList
