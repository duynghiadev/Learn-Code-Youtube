import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [submittedData, setSubmittedData] = useState<FormData[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form data
    const validationErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required'
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required'
    }

    // If there are validation errors, setErrors and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Clear errors if there are no validation errors
    setErrors({})

    // Save the submitted data to the state
    setSubmittedData((prevData) => [...prevData, formData])

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </label>
        <br />
        <label>
          Email:
          <input type='email' name='email' value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </label>
        <br />
        <label>
          Message:
          <textarea name='message' value={formData.message} onChange={handleChange} />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data:</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <strong>Name:</strong> {data.name}, <strong>Email:</strong> {data.email},{' '}
                <strong>Message:</strong> {data.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Contact
