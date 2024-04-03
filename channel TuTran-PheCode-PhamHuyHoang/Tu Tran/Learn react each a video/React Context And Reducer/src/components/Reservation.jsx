import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 5)

const Reservation = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const {
    dispatch,
    state: { reservations }
  } = useContext(AppContext)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (name.trim() === '') {
      setError('Please enter a customer name')
      return
    }
    const customer = { customerId: nanoid(), name }
    dispatch({ type: 'ADD_CUSTOMER_TO_RESERVATION_LIST', payload: customer })
    setName('')
    setError('')
  }

  const onClickHandler = (customer) => {
    const tableId = nanoid()

    dispatch({
      type: 'ADD_CUSTOMER_TO_TABLE_LIST',
      payload: { tableId, customer }
    })

    dispatch({
      type: 'REMOVE_CUSTOMER_FROM_RESERVATION_LIST',
      payload: { customerId: customer.customerId }
    })
  }

  return (
    <div className='reservation'>
      <h2>Reservation</h2>

      {/* Form */}
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Customer Name'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setError('')
          }}
        />
        <button type='submit'>Add To List</button>
      </form>

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* List */}
      <ul>
        {reservations.map((customer) => (
          <li
            key={customer.customerId}
            style={{ marginTop: '1rem' }}
          >
            Customer 🧑{customer.customerId}: {customer.name}{' '}
            <button onClick={() => onClickHandler(customer)}>
              Add to table
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reservation
