import { FC } from 'react';
import { BookStoreType } from '../../common/Types';
import Book from './Book';
import { BookTableFooter } from './BookTableFooter';
import { BookTableHeader } from './BookTableHeader';

interface BookListProps {
  bookStore: BookStoreType;
}

export const BookList: FC<BookListProps> = ({ bookStore }) => {
  return (
    <div id="books">
      <BookTableHeader />
      <div className="min-h-[345px] overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Title
              </th>
              <th scope="col" className="px-4 py-3">
                Author
              </th>
              <th scope="col" className="px-4 py-3">
                Topic
              </th>
              <th scope="col" className="px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookStore.data.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </tbody>
        </table>
      </div>
      <BookTableFooter
        page={bookStore.page}
        perPage={bookStore.perPage}
        total={bookStore.total}
        totalPages={bookStore.totalPages}
      />
    </div>
  );
};
