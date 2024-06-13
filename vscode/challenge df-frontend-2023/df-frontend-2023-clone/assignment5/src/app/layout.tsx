import '@/src/styles/globals.css'

import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'Bookstore',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // Server side theme detection to prevent flashing
  const themeMode = cookies().get('themeMode')

  return (
    <html lang="en" className={(themeMode && themeMode.value) || ''}>
      <body className="bg-slate-200 !transition-none transition-[background-color] duration-500 dark:bg-slate-800 dark:text-gray-50">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
