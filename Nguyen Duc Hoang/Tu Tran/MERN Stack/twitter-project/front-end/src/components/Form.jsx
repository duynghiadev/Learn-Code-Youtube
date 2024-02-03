import '../css/Form.css'

const Form = () => {
  return (
    // FORM
    <section className='form-section'>
      <form className='form'>
        <textarea
          type='text'
          name='content'
          id='content'
          className='content'
          placeholder="What's happening?"
        ></textarea>
        <button className='btn' type='submit'>
          Tweet
        </button>
      </form>
    </section>
  )
}

export default Form
