import '../css/Form.css'
import axios from 'axios'
import AppContext from './AppContext'
import { useContext, useState } from 'react'

const Form = () => {
  const { state, dispatch } = useContext(AppContext)
  const { user } = state
  const [postInput, setPostInput] = useState({ content: {} })
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault()
      const token = localStorage.getItem('token')
      const option = {
        method: 'post',
        url: '/api/v1/posts/',
        data: postInput,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const response = await axios(option)

      const { post } = response.data.data
      const author = { _id: post.author, name: user.userName }

      dispatch({
        type: 'CREATE_ONE_POST',
        payload: { ...post, author, isEditable: true }
      })
      // Reset post
      setPostInput({ content: '' })
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    // FORM
    <section className='form-section'>
      <form
        className='form'
        onSubmit={onSubmitHandle}
      >
        {errorMessage && (
          <div className='error-message'>Error:{errorMessage}</div>
        )}
        <textarea
          type='text'
          name='content'
          id='content'
          className='content'
          placeholder="What's happening?"
          value={postInput.content}
          onChange={(e) =>
            setPostInput({ ...postInput, [e.target.name]: e.target.value })
          }
        />
        <button
          className='btn'
          type='submit'
        >
          Tweet
        </button>
      </form>
    </section>
  )
}

export default Form
