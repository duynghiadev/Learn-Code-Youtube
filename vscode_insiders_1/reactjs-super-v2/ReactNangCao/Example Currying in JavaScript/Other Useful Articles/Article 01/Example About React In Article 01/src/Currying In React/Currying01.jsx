import { useState } from 'react'

// This is the traditional way 👎
function Currying01() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAddress = (event) => {
    setAddress(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <>
      <input value={name} onChange={handleName} placeholder="Enter Name" />
      <input value={address} onChange={handleAddress} placeholder="Enter Address" />
      <input value={email} onChange={handleEmail} placeholder="Enter Email" />
      <br />
      <label>Name : {name}</label><br />
      <label>Address : {address}</label><br />
      <label>Email : {email}</label>
    </>
  )
}

export default Currying01