import { FC } from 'react';
import Link from 'next/link';
import { BookType } from '../../common/Types';

interface BookProps {
  book: BookType;
}
const Book: FC<BookProps> = ({ book }) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {book.title}
      </th>
      <td className="px-4 py-3">{book.author}</td>
      <td className="px-4 py-3">{book.topic}</td>
      <td className="px-4 py-3 flex">
        <Link
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          href={`/books/${book.id}`}
        >
          Show
        </Link>
        <Link
          href={`/books/${book.id}/edit`}
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default Book;
