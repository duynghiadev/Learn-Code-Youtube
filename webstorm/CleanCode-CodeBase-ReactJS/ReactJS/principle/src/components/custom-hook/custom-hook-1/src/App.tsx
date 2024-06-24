/**
 * Dưới đây là một ví dụ đơn giản về cách sử dụng TypeScript để tạo một custom hook trong một ứng dụng React với 5 components. Trong ví dụ này, chúng ta sẽ tạo một custom hook để quản lý trạng thái dark mode của ứng dụng.
 */
import React, { useEffect, useReducer, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import useDarkMode from './hooks/useDarkMode'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { appReducer } from './reducer/appReducer'
import Header from './components/Header'
import './App.scss' // Import file SCSS

const App: React.FC = () => {
  const initialValues = {
    username: '',
    email: ''
  }

  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [state, dispatch] = useReducer(appReducer, { user: '' })
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        dispatch({ type: 'SET_USER', payload: data.name })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required')
  })

  const onSubmit = async (values: any) => {
    try {
      console.log('Form submitted:', values)

      // Simulate API request delay
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })

      // Reset form and show success message
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label>
            Username:
            <Field type='text' name='username' />
            <ErrorMessage name='username' component='div' />
          </label>
          <label>
            Email:
            <Field type='text' name='email' />
            <ErrorMessage name='email' component='div' />
          </label>
          <button type='submit'>Submit</button>
          {submitSuccess && <div className='success-message'>Form submitted successfully!</div>}
        </Form>
      </Formik>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} user={state.user} />
      <div className='app-content'>
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
