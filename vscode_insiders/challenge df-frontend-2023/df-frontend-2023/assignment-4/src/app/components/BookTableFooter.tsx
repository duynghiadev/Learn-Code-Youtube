import { usePathname, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import Pagination from './common/Pagination';

interface BookProps {
  page: number | 1;
  perPage: number | 5;
  total: number | 0;
  totalPages: number | 0;
}

export const BookTableFooter: FC<BookProps> = ({
  page,
  perPage,
  total,
  totalPages,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (page: string, value: number) => {
      const params = new URLSearchParams(searchParams);
      params.set(page, value.toString());
      return params.toString();
    },
    [searchParams],
  );

  const generatePaginationArray = () => {
    const pageSet = new Set<number>();
    pageSet.add(1);
    if (page > 1) pageSet.add(page - 1);
    pageSet.add(page);
    if (page < totalPages) pageSet.add(page + 1);
    if (totalPages !== 0) pageSet.add(totalPages);
    const paginationArray = Array.from(pageSet);
    return paginationArray;
  };

  const paginationArray = generatePaginationArray();

  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing&nbsp;
        <span className="font-semibold text-gray-900 dark:text-white">
          {`${Math.min((page - 1) * perPage + 1, total)} - ${Math.min(
            page * perPage,
            total,
          )}`}
        </span>
        &nbsp;of&nbsp;
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>
      </span>
      <Pagination
        pathname={pathname}
        createQueryString={createQueryString}
        paginationArray={paginationArray}
        currentPage={page}
      />
    </nav>
  );
};
