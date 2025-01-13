import { useLayoutEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import '../assets/styles/pagination.css'

export interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage: externalCurrentPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  useLayoutEffect(() => {
    setCurrentPage(externalCurrentPage)
  }, [externalCurrentPage])

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1

    onPageChange?.(newPage)
    setCurrentPage(newPage)
  }

  return (
    <ReactPaginate
      forcePage={currentPage - 1}
      pageCount={totalPages}
      onPageChange={handlePageClick}
      previousLabel="←"
      nextLabel="→"
      containerClassName="pagination"
      previousLinkClassName="pagination__link"
      nextLinkClassName="pagination__link"
      disabledClassName="pagination__link--disabled"
      activeClassName="pagination__link--active"
    />
  )
}

export default Pagination
