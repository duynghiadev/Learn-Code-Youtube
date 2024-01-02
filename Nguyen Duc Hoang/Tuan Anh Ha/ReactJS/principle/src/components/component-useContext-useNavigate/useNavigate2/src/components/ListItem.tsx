import React from 'react'
import './ListItem.scss'

interface Props {
  text: string
  onClick: (id: number) => void
}

const ListItem: React.FC<Props> = ({ text, onClick }) => (
  <div
    className={`list-item ${text === 'Large' ? 'large' : ''}`}
    onClick={(e) => onClick(Number((e.target as HTMLElement).dataset.id))}
  >
    <span data-id={text}>{text}</span>
  </div>
)

export default ListItem
