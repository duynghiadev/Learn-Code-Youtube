import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBookContext } from '../contexts/bookContext'
import { IBook } from '../interface/book.model'
import { bookSchema, BookSchemaType } from '../schemas/book'

interface AddBookProps {
  closeAddBook: () => void
}

function AddBook({ closeAddBook }: AddBookProps): JSX.Element {
  const { addBook } = useBookContext()

  const topics = [
    { label: 'Programming', value: 'Programming' },
    { label: 'Database', value: 'Database' },
    { label: 'DevOps', value: 'DevOps' },
  ]

  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm<BookSchemaType>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: '',
      author: '',
      topic: 'Programming',
    },
  })
  const name = watch('name')
  const author = watch('author')
  const topic = watch('topic')

  const onSubmit: SubmitHandler<BookSchemaType> = () => {
    const bookId = Math.floor(Math.random() * 1000)
    const newBook: IBook = {
      id: bookId,
      name,
      author,
      topic,
    }

    addBook(newBook)
    reset()
    closeAddBook()
  }

  return (
    <div className="w-full h-full block fixed px-1 py-4 left-0 right-0 overflow-auto z-10 bg-transparent">
      <div className="m-auto bg-white dark:bg-slate-800 p-5 border rounded-md w-96 shadow-2xl popoutModal animation-popoutModal">
        <div className="flex flex-row justify-between">
          <h2 className="text-gray-800 dark:text-white font-bold text-2xl">
            Add book
          </h2>
          <button className="btn-close" onClick={closeAddBook}>
            &times;
          </button>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col align-middle justify-center m-3">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
              >
                Name
                <input
                  {...register('name')}
                  className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                  placeholder="Book name"
                  id="name"
                  autoFocus
                />
              </label>
              {errors.name && (
                <p className="text-sm font-bold text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="author"
                className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
              >
                Author
                <input
                  {...register('author')}
                  className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                  placeholder="Author"
                  id="author"
                />
              </label>
              {errors.author && (
                <p className="text-sm font-bold text-red-400">
                  {errors.author.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="topic"
                className="block mb-2 text-base font-bold text-gray-700 dark:text-white"
              >
                Topic
                <select
                  {...register('topic')}
                  className="outline-none box-border transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  id="topic"
                >
                  {topics.map((topic, index) => (
                    <option key={index} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook
