'use client'

import { useEffect, useState } from 'react'

import { IBook } from '@/src/types/book'
import Button from '@/src/components/Button'
import { useBooksContext } from '@/src/contexts/BooksContext'
import TableRow from './TableRow'

export default function Table() {
  const { bookStore, pageIndex, pageSize, search, setPageIndex } =
    useBooksContext()
  const [filtered, setFiltered] = useState<IBook[]>([])

  useEffect(() => {
    const filteredList = bookStore
      .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
      .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)

    setFiltered(filteredList)

    // If the current page is not the first page and the filtered list is empty, navigate back one page.
    if (pageIndex > 0 && filteredList.length === 0) {
      setPageIndex(pageIndex - 1)
    } else {
      setPageIndex(pageIndex)
    }
  }, [bookStore, pageIndex, pageSize, search, setPageIndex])

  return (
    <section className="w-full overflow-auto rounded-lg shadow-[0_.25rem_.5rem_-.5rem] shadow-black">
      <table className="w-full border-collapse border-spacing-0 bg-white transition-colors ease-linear dark:bg-slate-700">
        <thead className="bg-slate-400 transition-colors ease-linear dark:bg-slate-600">
          <tr>
            <th className="px-4 py-3 text-left xl:w-[4.5rem]">No.</th>
            <th className="min-w-[16rem] px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left xl:w-80">Author</th>
            <th className="px-4 py-3 text-left xl:w-64">Topic</th>
            <th className="px-4 py-3 text-right xl:w-52">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length ? (
            filtered.map((book, index) => (
              <TableRow
                key={book.id}
                book={book}
                index={index + pageIndex * pageSize}
              />
            ))
          ) : (
            <tr className="pointer-events-none select-none bg-white dark:bg-slate-700">
              <td
                colSpan={5}
                className={`px-4 py-3 text-center text-2xl font-medium leading-none empty-row--${pageSize}`}
              >
                No books
              </td>
            </tr>
          )}
          {/* Add more rows when the filtered list contains fewer items than the specified page size */}
          {filtered.length > 0 &&
            filtered.length < pageSize &&
            Array.from(Array(pageSize - filtered.length).keys()).map((key) => (
              <tr key={key} className="invisible opacity-0">
                <td colSpan={5} className="px-4 py-3">
                  <Button>button</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}
