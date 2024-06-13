'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-12 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <Link href="/" className="flex mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BookStore
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              width={20}
              height={20}
              src="/avatar.jpeg"
              alt="Avatar"
            />
            <div className="flex flex-col items-end">
              <p className="self-center text-sm whitespace-nowrap dark:text-white">
                Giang
              </p>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
