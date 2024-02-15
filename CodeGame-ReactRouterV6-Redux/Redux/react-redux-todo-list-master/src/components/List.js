import React from 'react'

export default function List (props) {
  return (
		<ul className="list-group">
        {props.items.map((item) => (
          <li className="list-group-item" key={item.id}>
           	<span
              onClick={() => props.toggle && props.toggle(item.id)}
              style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                {item.name}
            </span>
            <button className="btn btn-outline-secondary ml-2" onClick={() => props.remove(item)}>
              X
            </button>
          </li>
        ))}
		</ul>
  )
}