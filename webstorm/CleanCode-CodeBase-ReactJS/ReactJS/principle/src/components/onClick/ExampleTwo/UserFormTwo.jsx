import React, { useState } from 'react'

const UserFormTwo = ({ addUser }) => {
  const [newUserName, setNewUserName] = useState('')
  const [newUserPhone, setNewUserPhone] = useState('')
  const [error, setError] = useState('')

  const handleNameChange = (e) => {
    setNewUserName(e.target.value)
    setError('')
  }

  const handlePhoneChange = (e) => {
    setNewUserPhone(e.target.value)
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newUserName.trim() === '' && newUserPhone.trim() === '') {
      setError('Please enter name and phone.')
      return
    }

    if (newUserName.trim() === '') {
      setError('Please enter a name.')
      return
    }

    if (newUserPhone.trim() === '') {
      setError('Please enter a phone number.')
      return
    }

    const newUser = {
      id: Date.now(),
      name: newUserName,
      email: `${newUserName.toLowerCase()}@example.com`,
      phone: newUserPhone
    }

    addUser(newUser)
    setNewUserName('')
    setNewUserPhone('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <label>
        Name:
        <input type='text' value={newUserName} onChange={handleNameChange} />
      </label>
      <label>
        Phone:
        <input type='text' value={newUserPhone} onChange={handlePhoneChange} />
      </label>
      <button type='submit'>Add User</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default UserFormTwo
