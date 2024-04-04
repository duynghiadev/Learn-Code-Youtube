import { useState } from 'react'

const initialAddress = () => {
  return {
    nation: 'Vietnam',
    city: {
      street: 'Hoa Son 6',
      house: 'Building'
    }
  }
}

export default function User() {
  const [firstName, setFirstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState(initialAddress)
  const [, forceRerender] = useState(0)

  const Rerender = () => {
    forceRerender((prevState) => prevState + 1)
  }

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const changeStreet = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '02 Hoa Son 6'

      return {
        ...prevAddress,
        city: newCity
      }
    })
  }

  console.log('re-render')

  return (
    <div>
      <h1>User Functional Component</h1>
      <ul>
        <li>First name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>

      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={Rerender}>Rerender</button>
      <button onClick={changeStreet}>Change Street</button>
    </div>
  )
}
