import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { trimTrim } from '@/src/lib/utils'
import { BOOK_TOPICS } from '@/src/lib/data'
import Dialog from '@/src/components/Dialog'
import { useBooksContext } from '@/src/contexts/BooksContext'
import {
  DIALOG_TYPE,
  useBooksDialogContext,
} from '@/src/contexts/BooksDialogContext'

export default function AddEditBookDialog() {
  const { addBook, editBook } = useBooksContext()
  const { dialogProps, dialogType, hideDialogs } = useBooksDialogContext()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const schema = z.object({
    id: z.string(),
    title: z
      .string()
      .min(5, { message: 'Title must be at least 5 characters.' }),
    author: z.string().regex(/^[A-Za-z][A-Za-z\s]*$/, {
      message: 'Name contains letters and spaces only.',
    }),
    topic: z
      .string()
      .refine((value) => Object.keys(BOOK_TOPICS).includes(value), {
        message: 'Topic is required.',
      }),
  })

  type Schema = z.infer<typeof schema>

  const {
    formState: { errors, isDirty, isSubmitting },
    handleSubmit,
    register,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: dialogProps?.book.id ?? '',
      title: dialogProps?.book.title ?? '',
      author: dialogProps?.book?.author ?? '',
      topic: dialogProps?.book?.topic ?? '',
    },
  })

  useEffect(() => {
    const dialog = dialogRef.current

    dialog?.addEventListener('close', hideDialogs)

    return () => dialog?.removeEventListener('close', hideDialogs)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (dialogType === DIALOG_TYPE.ADD || dialogType === DIALOG_TYPE.EDIT) {
      handleShow()
    } else {
      handleHide()
    }
  }, [dialogType])

  const formSubmit: SubmitHandler<Schema> = async (data) => {
    if (dialogType === DIALOG_TYPE.EDIT) {
      // Dirty to prevent submission of unchanged data
      if (isDirty) {
        // Simulate latency
        await new Promise((resolve) => setTimeout(resolve, 1000)) // eslint-disable-line no-promise-executor-return
        await editBook({
          id: data.id,
          title: trimTrim(data.title),
          author: trimTrim(data.author),
          topic: data.topic,
        })
      }
    } else {
      // Simulate latency
      await new Promise((resolve) => setTimeout(resolve, 1000)) // eslint-disable-line no-promise-executor-return
      await addBook({
        id: Date.now().toString(),
        title: trimTrim(data.title),
        author: trimTrim(data.author),
        topic: data.topic,
      })
    }

    handleHide()
  }

  const handleShow = () => dialogRef?.current?.showModal()
  const handleHide = () => dialogRef?.current?.close()

  return (
    <Dialog
      ref={dialogRef}
      title={dialogType === DIALOG_TYPE.EDIT ? 'Edit book' : 'Add new book'}
      actions={[
        {
          type: 'submit',
          variant: 'primary',
          form: 'add-book-form',
          disabled: isSubmitting,
          className: 'flex-1',
          label: isSubmitting
            ? 'Saving…'
            : `${
                dialogType === DIALOG_TYPE.EDIT ? 'Update book' : 'Save book'
              }`,
        },
        {
          type: 'reset',
          form: 'add-book-form',
          disabled: isSubmitting,
          className: 'flex-1',
          onClick: handleHide,
          label: 'Cancel',
        },
      ]}
    >
      <form
        id="add-book-form"
        method="dialog"
        noValidate
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="form-title" className="relative">
            <div className="mb-2 text-sm">Title</div>
            <input
              {...register('title')}
              type="text"
              id="form-title"
              placeholder="Title"
              disabled={isSubmitting}
              autoCapitalize="words"
              className={`peer w-full rounded-[.25rem] bg-gray-100 text-black focus:bg-white focus:ring-0 ${
                errors.title
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-orange-400 dark:focus:ring-orange-400'
                  : 'border-transparent focus:border-gray-500'
              }`}
            />
            {errors.title && (
              <p className="pointer-events-none absolute left-0 top-[95%] z-[1] select-none rounded bg-orange-600 p-1 text-xs font-medium text-white opacity-0 transition-all peer-focus:top-[calc(100%+.125rem)] peer-focus:opacity-100 dark:bg-amber-100 dark:text-red-600">
                {errors.title?.message}
              </p>
            )}
          </label>
          <label htmlFor="form-author" className="relative">
            <div className="mb-2 text-sm">Author</div>
            <input
              {...register('author')}
              type="text"
              id="form-author"
              placeholder="Author"
              disabled={isSubmitting}
              autoCapitalize="words"
              className={`peer w-full rounded-[.25rem] bg-gray-100 text-black focus:bg-white focus:ring-0 ${
                errors.author
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-orange-400 dark:focus:ring-orange-400'
                  : 'border-transparent focus:border-gray-500'
              }`}
            />
            {errors.author && (
              <p className="pointer-events-none absolute left-0 top-[95%] z-[1] select-none rounded bg-orange-600 p-1 text-xs font-medium text-white opacity-0 transition-all peer-focus:top-[calc(100%+.125rem)] peer-focus:opacity-100 dark:bg-amber-100 dark:text-red-600">
                {errors.author?.message}
              </p>
            )}
          </label>
          <label htmlFor="form-topic" className="relative">
            <div className="mb-2 text-sm">Topic</div>
            <select
              {...register('topic')}
              id="form-topic"
              disabled={isSubmitting}
              className={`peer w-full rounded-[.25rem] bg-gray-100 text-black focus:bg-white focus:ring-0 ${
                errors.topic
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-orange-400 dark:focus:ring-orange-400'
                  : 'border-transparent focus:border-gray-500'
              }`}
            >
              <option value="">Select a topic</option>
              {Object.entries(BOOK_TOPICS).map((topic, index) => (
                <option key={index} value={topic[0]}>
                  {topic[1]}
                </option>
              ))}
            </select>
            {errors.topic && (
              <p className="pointer-events-none absolute left-0 top-[95%] z-[1] select-none rounded bg-orange-600 p-1 text-xs font-medium text-white opacity-0 transition-all peer-focus:top-[calc(100%+.125rem)] peer-focus:opacity-100 dark:bg-amber-100 dark:text-red-600">
                {errors.topic?.message}
              </p>
            )}
          </label>
        </div>
      </form>
    </Dialog>
  )
}
