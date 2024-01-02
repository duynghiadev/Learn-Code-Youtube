import React from 'react'
import './List.scss'

interface Props {
  children: React.ReactNode
}

const List: React.FC<Props> = ({ children }) => {
  return <div className={`list ${children === 'Large' ? 'large' : ''}`}>{children}</div>
}

export default List
