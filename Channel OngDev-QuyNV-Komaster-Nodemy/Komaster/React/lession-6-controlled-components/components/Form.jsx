import { useState } from 'react'

function Form() {
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [select, setSelect] = useState('orange')
  const [multiSelect, setMultiSelect] = useState(['apple', 'avocado'])

  const onTextchange = (ev) => {
    setText(ev.target.value)
  }

  const onTextareaChange = (ev) => {
    setTextarea(ev.target.value)
  }

  const onSelectChange = (ev) => {
    setSelect(ev.target.value)
  }

  const onMultiSelectChange = (ev) => {
    const value = ev.target.value

    const exist = multiSelect.find((item) => item === value)

    if (!exist) {
      setMultiSelect([...multiSelect, value])
    } else {
      setMultiSelect(multiSelect.filter((item) => item !== value))
    }
  }

  return (
    <form className='form'>
      <label htmlFor=''>Input text</label>
      <input type='text' value={text} onChange={onTextchange} />

      <label htmlFor=''>Textarea</label>
      <textarea
        value={textarea}
        cols='30'
        rows='10'
        onChange={onTextareaChange}
      />

      <label htmlFor=''>Single select</label>
      <select value={select} onChange={onSelectChange}>
        <option value='apple'>Apple</option>
        <option value='orange'>Orange</option>
        <option value='watermelon'>Watermelon</option>
        <option value='avocado'>Avocado</option>
        <option value='pineapple'>Pineapple</option>
      </select>

      <label htmlFor=''>Multiple select</label>
      <select multiple value={multiSelect} onChange={onMultiSelectChange}>
        <option value='apple'>Apple</option>
        <option value='orange'>Orange</option>
        <option value='watermelon'>Watermelon</option>
        <option value='avocado'>Avocado</option>
        <option value='pineapple'>Pineapple</option>
      </select>
    </form>
  )
}

export default Form
