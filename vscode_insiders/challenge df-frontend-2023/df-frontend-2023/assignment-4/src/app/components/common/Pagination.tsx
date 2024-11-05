import Link from 'next/link';
import { FC } from 'react';

interface PaginationProps {
  pathname: string;
  createQueryString: (page: string, value: number) => string;
  paginationArray: number[];
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  pathname,
  createQueryString,
  paginationArray,
  currentPage,
}) => {
  const pageNumber = (curPage) => {
    if (paginationArray.length < 3) return `${curPage}`;
    if (curPage === 1 && curPage !== currentPage) return '<<';
    const lastPageIndex = paginationArray.length - 1;
    if (curPage === paginationArray[lastPageIndex] && curPage !== currentPage)
      return '>>';
    return `${curPage}`;
  };

  return (
    <ul className="inline-flex items-stretch -space-x-px">
      {paginationArray.map((curPage) => (
        <li key={curPage}>
          <Link
            href={`${pathname}?${createQueryString('page', curPage)}`}
            aria-current={curPage === currentPage ? 'page' : undefined}
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
              curPage === currentPage
                ? 'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
          >
            {pageNumber(curPage)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
