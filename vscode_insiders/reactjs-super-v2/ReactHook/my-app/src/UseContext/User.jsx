import { useEffect } from 'react'
import { useState } from 'react'
import UserProfile from './UserProfile'

const initialAddress = () => {
  return {
    nation: 'Vietnam',
    city: {
      street: 'Hoa Son 6',
      house: 'Building'
    }
  }
}

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100 Nicolas, New York City',
          house: 'Vilage'
        }
      })
    }, 3000)
  })
}

export default function UserUseContext() {
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

  const profile = 100

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

  // Thường dùng để gọi API
  useEffect(() => {
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress }
        newAddress.city = res.city
        return newAddress
      })
    })

    // cleanup function
    return () => {
      console.log('Huy goi API')
    }
  }, [])

  return (
    <div>
      <h1>useContext hooks</h1>

      <UserProfile />

      <button onClick={Rerender}>Rerender</button>
      <button onClick={changeStreet}>Change Street</button>
    </div>
  )
}
