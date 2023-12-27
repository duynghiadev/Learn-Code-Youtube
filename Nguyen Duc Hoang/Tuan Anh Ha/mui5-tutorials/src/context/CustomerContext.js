import { createContext, useState, useEffect } from 'react'

const CustomerContext = createContext()

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/customers')
      const responseJSON = await response.json()

      setCustomers(responseJSON)
    }

    fetchData()
  }, [])

  const createCustomer = async ({ name, details, gender, rating }) => {
    const response = await fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, details, gender, rating }),
    })

    const data = response.json()

    setCustomers([data, ...customers])
  }

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/customers/${id}`, { method: 'DELETE' })
    setCustomers(customers.filter((customer) => customer.id !== id))
  }

  return (
    <CustomerContext.Provider
      value={{ customers, deleteCustomer, createCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerContext
