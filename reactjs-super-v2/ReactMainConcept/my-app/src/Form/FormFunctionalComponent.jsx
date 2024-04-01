import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    food: 'coconut',
    marriage: false
  })

  const handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
        </label>

        <input
          type='checkbox'
          name='marriage'
          checked={formData.marriage}
          onChange={handleChange}
        />

        <textarea name='address' value={formData.address} onChange={handleChange} />

        <select onChange={handleChange} value={formData.food} name='food'>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>

        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Form
