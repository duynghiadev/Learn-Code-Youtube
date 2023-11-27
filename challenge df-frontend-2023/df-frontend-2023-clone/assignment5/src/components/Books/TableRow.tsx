import Link from 'next/link'

import { IBook } from '@/src/types/book'
import { PATHS } from '@/src/lib/constants'
import { BOOK_TOPICS } from '@/src/lib/data'
import Button from '@/src/components/Button'
import { useBooksDialogContext } from '@/src/contexts/BooksDialogContext'

interface ITableRow {
  book: IBook
  index: number
}

export default function TableRow({ book, index }: ITableRow) {
  const { showDeleteDialog, showEditDialog } = useBooksDialogContext()

  const handleEdit = () => showEditDialog(book)
  const handleDelete = () => showDeleteDialog(book)

  return (
    <tr className="group transition-colors ease-linear even:bg-slate-200 dark:even:bg-slate-600 md:hover:bg-slate-300 dark:md:hover:bg-slate-500">
      <td className="h-14 whitespace-nowrap px-4 py-3 md:h-16">{index + 1}</td>
      <td className="h-14 whitespace-nowrap px-4 py-3 md:h-16">
        <span className="max-md:hidden">{book.title}</span>
        <Link
          href={PATHS.BOOK.VIEW(book.id)}
          className="border-b border-dashed border-b-gray-600 dark:border-b-gray-400 md:hidden"
        >
          {book.title}
        </Link>
      </td>
      <td className="h-14 whitespace-nowrap px-4 py-3 md:h-16">
        {book.author}
      </td>
      <td className="h-14 whitespace-nowrap px-4 py-3 md:h-16">
        {BOOK_TOPICS[book.topic]}
      </td>
      <td className="text-r h-14 whitespace-nowrap px-4 py-3 md:h-16">
        <div className="flex items-center justify-end gap-3">
          <Link
            href={PATHS.BOOK.VIEW(book.id)}
            className="border-b border-dashed border-b-gray-600 text-sm font-medium dark:border-b-gray-400"
          >
            View
          </Link>
          <Button size="small" variant="info" onClick={handleEdit}>
            Edit
          </Button>
          <Button size="small" variant="warning" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  )
}
