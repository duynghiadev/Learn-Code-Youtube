import React, { useMemo, FunctionComponent } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface PaginationProps {
  onChangePage: (pageNumber: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

export const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount * 2 + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
      Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    )

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount.
      Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
      Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + siblingCount * 2
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
      Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
      Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    return [] as number[]
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}

const Pagination: FunctionComponent<PaginationProps> = (props) => {
  const {
    onChangePage,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    onChangePage,
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  // If there are less than 2 items in the pagination range, we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  const onNext = () => {
    if (currentPage === lastPage) {
      return
    }
    onChangePage(currentPage + 1)
  }

  const onPrevious = () => {
    if (currentPage === 1) {
      return
    }
    onChangePage(currentPage - 1)
  }

  return (
    <div className="flex justify-center p-1 rounded">
      {/* Left navigation arrow */}
      <button
        className={`btn-pagination rounded-tl-md rounded-bl-md inline-block bg-transparent text-blue-400 hover:text-black   ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={onPrevious}
        key="on_prev_pagination"
        disabled={currentPage === 1}
      >
        <AiOutlineArrowLeft />
      </button>

      {/* pageNumber: any */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {paginationRange.map((pageNumber: any, index: number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === '...') {
          return (
            <button
              className="btn-pagination opacity-50  cursor-not-allowed dark:text-blue-400 "
              key={`dots_${index}`}
            >
              <p className="pagination-item dots">&#8230;</p>
            </button>
          )
        }

        const randomKey = `${pageNumber}_nPageKey`

        // Render our Page Pills
        return (
          <button
            className={` btn-pagination inline-block hover:text-black focus:bg-gray-300  ${
              pageNumber === currentPage
                ? 'bg-gray-300 text-black'
                : 'bg-transparent text-blue-400'
            }`}
            onClick={() => onChangePage(pageNumber)}
            key={randomKey}
          >
            <p className="px-1 active:bg-gray-300 focus:bg-gray-300 focus:text-black">
              {pageNumber}
            </p>
          </button>
        )
      })}
      {/*  Right Navigation arrow */}
      <button
        className={`btn-pagination rounded-tr-md rounded-br-md bg-transparent text-blue-400 hover:text-black ${
          currentPage === lastPage ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={onNext}
        key="on_next_pagination"
        disabled={currentPage === lastPage}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  )
}

export default Pagination
