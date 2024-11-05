import React, { useLayoutEffect, useState } from 'react'
import { Book } from '../types'
import { GENRES } from '../utils/functions'
import Button from './Button'
import InputField from './InputField'
import SelectField from './SelectField'

interface BookFormProps {
  editedBook: Book | null
  errorMsg: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  firstInputRef: React.Ref<HTMLInputElement>
}

const defaultFormValues = {
  title: '',
  author: '',
  genre: '',
}

const BookForm = ({
  editedBook,
  errorMsg,
  onSubmit,
  firstInputRef,
}: BookFormProps) => {
  const isEditingBook = Boolean(editedBook)

  const [formValues, setFormValues] = useState(defaultFormValues)

  useLayoutEffect(() => {
    if (editedBook) {
      setFormValues(editedBook)
    } else {
      setFormValues(defaultFormValues)
    }

    return () => {
      setFormValues(defaultFormValues)
    }
  }, [editedBook])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e)
        setFormValues(defaultFormValues)
      }}
    >
      <div className="form__group">
        <InputField
          ref={firstInputRef}
          label="Name"
          name="title"
          placeholder="Enter book name"
          value={formValues.title}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <InputField
          label="Author"
          name="author"
          placeholder="Enter book author"
          value={formValues.author}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <SelectField
          label="Genre"
          name="genre"
          options={GENRES}
          value={formValues.genre}
          onChange={handleChange}
        />
      </div>
      <div className="form__error">{errorMsg}</div>
      <div className="form__group form__group--btn">
        <Button type="submit" className="btn">
          {isEditingBook ? 'Edit' : 'Create'}
        </Button>
      </div>
    </form>
  )
}

export default BookForm
