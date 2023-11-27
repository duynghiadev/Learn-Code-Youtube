'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { trimTrim } from '@/src/lib/utils'
import Button from '@/src/components/Button'
import { useBooksContext } from '@/src/contexts/BooksContext'
import { useBooksDialogContext } from '@/src/contexts/BooksDialogContext'

export default function TableToolbar() {
  const { bookStore, pageIndex, search, setSearch } = useBooksContext()
  const { showAddDialog } = useBooksDialogContext()
  const [keyword, setKeyword] = useState<string>('')
  const router = useRouter()
  const pathname = usePathname()

  // Check for search keyword parameter and set state
  useEffect(() => {
    if (search) {
      setKeyword(trimTrim(search))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let typeTimeout: string | number | NodeJS.Timeout | undefined

    if (bookStore.length) {
      typeTimeout = setTimeout(() => setSearch(trimTrim(keyword)), 300)
    }

    return () => {
      clearTimeout(typeTimeout)
    }
  }, [bookStore, keyword, setSearch])

  useEffect(() => {
    const query = new URLSearchParams()

    // Set search keyword parameter
    if (search.length) {
      query.set('q', search)
      setKeyword(search)
    } else {
      query.delete('q')
    }

    // Set current page parameter
    query.set('page', (pageIndex + 1).toString())

    // Push to URL
    if (pathname) {
      router.replace(`${pathname}?${query}`, {})
    }
  }, [search]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={keyword}
          onInput={(event) =>
            setKeyword((event.target as HTMLInputElement).value)
          }
          className="rounded-[.25rem] border-gray-300 pe-12 text-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-64"
        />
        <button
          type="button"
          className="absolute right-1 top-1/2 -translate-y-1/2 border-0 bg-transparent p-2 text-xs text-black"
          onClick={() => setKeyword('')}
        >
          clear
        </button>
      </div>
      <Button variant="info" onClick={showAddDialog}>
        New book
      </Button>
    </div>
  )
}
