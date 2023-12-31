import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import ReduxProvider from './store/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Books store',
  description: 'Generated by create next app',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-screen h-screen relative bg-[var(--bgColor)]">
          <ReduxProvider>{props.children}</ReduxProvider>
        </div>
      </body>
    </html>
  )
}
