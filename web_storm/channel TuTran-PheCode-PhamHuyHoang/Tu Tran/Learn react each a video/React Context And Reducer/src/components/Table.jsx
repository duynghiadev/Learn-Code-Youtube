import React, { useContext } from 'react'
import { AppContext } from '../context/context'

function Table() {
  const {
    state: { tables }
  } = useContext(AppContext)

  return (
    <div className='table'>
      <h2>Table</h2>
      <ul>
        {tables.map((table) => (
          <li
            key={table.tableId}
            style={{ marginTop: '1rem' }}
          >
            Table 🎉{table.tableId}: {table.customer.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Table
