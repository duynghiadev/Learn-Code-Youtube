'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'

import { useBooksContext, useBooksDialogContext } from '@/src/components/Books'
import { PATHS } from '@/src/lib/constants'
import { BOOK_TOPICS } from '@/src/lib/data'
import Button from '@/src/components/Button'

interface IViewBook {
  params: { id: string }
}

export default function ViewBook({ params: { id } }: IViewBook) {
  const { bookStore } = useBooksContext()
  const { showDeleteDialog } = useBooksDialogContext()
  const result = bookStore.filter((book) => book.id === id)

  if (result.length === 0) {
    notFound()
  }

  const handleDelete = () => showDeleteDialog(result[0])

  return (
    <section className="mx-auto w-[60rem] max-w-full">
      <title>{`${result[0].title} – ${result[0].author}`}</title>

      <div className="mb-8 font-medium">
        <Link href={PATHS.BOOK.ROOT}>Books</Link>
        <span className="px-4">/</span>
        <span className="text-gray-500 dark:text-gray-400">
          {result[0].title}
        </span>
      </div>

      <div className="relative">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-50 md:mr-56 md:text-5xl md:leading-tight">
          {result[0].title}
        </h2>
        <div className="mt-2 text-xl font-medium text-gray-600 dark:text-gray-200 md:mt-4 md:text-3xl">
          by {result[0].author}
        </div>
        <div className="mt-8 inline-block rounded-2xl bg-stone-300 px-3 py-1 text-black">
          {BOOK_TOPICS[result[0].topic]}
        </div>
        <div className="right-0 top-0 text-right max-md:mt-8 md:absolute">
          <Button variant="warning" size="large" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </section>
  )
}
