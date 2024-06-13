import { useState } from 'react'

// This is apply currying here 👍
function Currying02() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (setSate) => (event) => {
    setSate(event.target.value)
  }

  return (
    <>
      <input value={name} onChange={handleChange(setName)} placeholder="Enter Name" />
      <input value={address} onChange={handleChange(setAddress)} placeholder="Enter Address" />
      <input value={email} onChange={handleChange(setEmail)} placeholder="Enter Email" />
      <br />
      <label>Name : {name}</label><br />
      <label>Address : {address}</label><br />
      <label>Email : {email}</label>
    </>
  )
}

export default Currying02