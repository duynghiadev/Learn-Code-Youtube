'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookType } from '../../../common/Types';
import BookManagerService from '../../../services/BookManagerService';
import NotificationManagerService from '../../../services/NotificationManagerService';
import { BookForm } from '../../components/BookForm';
import { Dialog } from '../../components/common/Dialog';
import { Toaster } from '../../components/common/Toaster';
import { UseToastNotification } from '../../hooks/UseToastNotification';
import Loading from '../../loading';
import CustomNotFound from '../../not-found';

export default function ShowBookPage({ params: { id } }) {
  const router = useRouter();
  const [book, setBook] = useState<BookType | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const { toaster, showToast, clearToast } = UseToastNotification();

  const showDeleteDialog = () => {
    setIsDialogVisible(true);
  };

  const hideDeleteDialog = () => {
    setIsDialogVisible(false);
  };

  const handleDeleteClick = () => {
    deleteBook();
  };

  const fetchBook = async (bookId: string) => {
    try {
      const fetchedBook = await BookManagerService.find(bookId);
      setBook(fetchedBook.data);
      setLoading(false);
    } catch (error) {
      NotificationManagerService.create({
        category: 'error',
        message: error,
      });
    }
  };

  const deleteBook = async () => {
    if (!book) return;
    try {
      const response = await BookManagerService.delete(book);
      if (response.status) {
        NotificationManagerService.create({
          category: 'success',
          message: response.message,
        });
        router.replace('/');
      } else {
        NotificationManagerService.create({
          category: 'success',
          message: response.message,
        });
        showToast();
      }
    } catch (error) {
      NotificationManagerService.create({
        category: 'error',
        message: error,
      });
    }
  };

  useEffect(() => {
    fetchBook(id);
  }, [id]);
  if (loading) return <Loading text="" />;
  if (book === undefined) return <CustomNotFound />;
  return (
    <>
      {toaster && <Toaster toaster={toaster} clearToast={clearToast} />}
      <section className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
              Book {book.id} Detail:
            </h2>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <Link
              href="/books/new"
              className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              New Book
            </Link>
            <Link
              href={`/books/${book.id}/edit`}
              className="flex items-center justify-center text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={showDeleteDialog}
              className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="space-y-3 md:space-y-0 md:space-x-4 p-4">
          <BookForm
            bookData={book}
            onSubmit={() => null}
            disableEdit
            onChange={() => null}
          />
        </div>
      </section>
      {isDialogVisible && (
        <Dialog
          message={`Are you sure you want to delete ${book.title} book?`}
          onSubmit={() => {
            handleDeleteClick();
            hideDeleteDialog();
          }}
          onClose={hideDeleteDialog}
        />
      )}
    </>
  );
}
