'use client'

import { ChangeEvent, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import Button from '@/src/components/Button'
import { useBooksContext } from '@/src/contexts/BooksContext'

export default function TablePagination() {
  const { bookStore, pageIndex, pageSize, search, setPageIndex, setPageSize } =
    useBooksContext()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchKeywordParam = searchParams?.get('q')
  const filtered = bookStore.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  )
  const totalPages = Math.ceil(filtered.length / pageSize)
  const currentFirstItem = pageIndex * pageSize + 1
  const currentLastItem = pageIndex * pageSize + pageSize

  useEffect(() => {
    const query = new URLSearchParams()

    // Set search keyword parameter with current URL parameter or state
    if ((searchKeywordParam && searchKeywordParam?.length) || search) {
      query.set('q', searchKeywordParam || search)
    }

    // Check and correct page value from URL parameter
    // Set new page parameter and state
    if (pageIndex >= 0 && pageIndex + 1 <= totalPages) {
      setPageIndex(pageIndex)
      query.set('page', (pageIndex + 1).toString())
    } else if (pageIndex + 1 > totalPages) {
      setPageIndex(totalPages - 1)
    } else {
      setPageIndex(0)
    }

    // Push to URL
    if (pathname) {
      router.replace(`${pathname}?${query}`, {})
    }
  }, [pageIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(event.target.value, 10))
  }
  const handlePrev = () =>
    setPageIndex(pageIndex > 0 ? pageIndex - 1 : pageIndex)
  const handleNext = () =>
    setPageIndex(pageIndex + 1 < totalPages ? pageIndex + 1 : pageIndex)

  return (
    totalPages > 0 && (
      <div className="mt-8 flex items-center justify-between gap-4 xs:justify-end xs:gap-6">
        <label htmlFor="page-size" className="flex items-center gap-1">
          <span>Page size:</span>
          <select
            name="page-size"
            id="page-size"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="w-auto border-0 border-b-2 border-gray-400 bg-transparent pr-8 text-current focus:border-black focus:ring-0"
          >
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        {totalPages > 0 && (
          <span>
            {currentFirstItem}–
            {currentLastItem > filtered.length
              ? filtered.length
              : currentLastItem}{' '}
            of {filtered.length}
          </span>
        )}
        <div>
          <Button
            variant="info"
            className="rounded-l-2xl rounded-r-none pl-[.875rem] pr-[.625rem] text-xl leading-none shadow-none"
            aria-label="Previous page"
            disabled={pageIndex <= 0}
            onClick={handlePrev}
          >
            ⬅️
          </Button>
          <Button
            variant="info"
            className="rounded-l-none rounded-r-2xl pl-[.625rem] pr-[.875rem] text-xl leading-none shadow-none"
            aria-label="Next page"
            disabled={pageIndex + 1 >= totalPages}
            onClick={handleNext}
          >
            ➡️
          </Button>
        </div>
      </div>
    )
  )
}
