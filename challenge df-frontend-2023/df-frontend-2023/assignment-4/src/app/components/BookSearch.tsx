'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const BookSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const getStoredSearchTerm = () => {
    if (typeof localStorage === 'undefined') return '';
    return localStorage.getItem('searchTerm') || '';
  };

  const setStoredSearchTerm = (value) => {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem('searchTerm', value);
  };

  const initialTerm = searchParams?.get('term') || getStoredSearchTerm();
  const [term, setTerm] = useState(initialTerm);

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('term', value);
      params.set('page', '1');
      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = useCallback(() => {
    router.push(`${pathname}?${createQueryString(term)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  useEffect(() => {
    setStoredSearchTerm(term);
    handleSearch();
  }, [handleSearch, term]);

  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
          required
        />
      </div>
    </form>
  );
};
