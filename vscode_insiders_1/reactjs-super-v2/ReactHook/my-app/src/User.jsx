import { useEffect } from 'react'
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

  console.log('re-render')

  // Giống componentDidUpdate, effect function chạy lại, mỗi khi component re-render
  // useEffect(() => {
  //   console.log(document.getElementsByTagName('li'))
  //   console.log('useEffect Giống componentDidUpdate')
  // })

  // Thường dùng để gọi API
  useEffect(() => {
    console.log('useEffect Giống componentDidMount')
    console.log(profile)
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

  useEffect(() => {
    console.log('age:', age)

    return () => {
      console.log('Clean age')
    }
  }, [age])

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
