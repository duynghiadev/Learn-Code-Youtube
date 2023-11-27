'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense, useDeferredValue } from 'react';
import { BookStoreType, SearchTermType } from '../common/Types';
import BookManagerService from '../services/BookManagerService';
import { BookList } from './components/BookList';
import Loading from './loading';
import { UseToastNotification } from './hooks/UseToastNotification';
import { Toaster } from './components/common/Toaster';

const defaultBookStore: BookStoreType = {
  page: 1,
  total: 0,
  totalPages: 0,
  data: [],
  perPage: 5,
};

export default function HomePage() {
  const searchParams = useSearchParams();
  const parsedPage = parseInt(searchParams?.get('page') ?? '1', 10) || 1;
  const parsedTerm = searchParams?.get('term') || '';

  const [bookStore, setBookStore] = useState<BookStoreType>(defaultBookStore);
  const deferredQuery = useDeferredValue(bookStore);

  const searchBook = async (curSearchTerm: SearchTermType) => {
    const result = await BookManagerService.getList(curSearchTerm);
    setBookStore(result);
  };

  useEffect(() => {
    const searchTerm: SearchTermType = {
      page: parsedPage,
      perPage: 5,
      term: parsedTerm,
    };
    searchBook(searchTerm);
  }, [parsedTerm, parsedPage]);

  const { toaster, clearToast } = UseToastNotification();

  return (
    <Suspense fallback={<Loading text="Books" />}>
      {toaster && <Toaster toaster={toaster} clearToast={clearToast} />}
      <BookList bookStore={deferredQuery} />
    </Suspense>
  );
}
