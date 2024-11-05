import { ReactNode } from 'react'
import { Metadata } from 'next'

import Container from '@/src/components/Container'
import {
  BooksProvider,
  BooksDialogProvider,
  DialogRenderer,
} from '@/src/components/Books'

export const metadata: Metadata = {
  title: 'Book List',
  description: 'Book List',
}

export default function BookLayout({ children }: { children: ReactNode }) {
  return (
    <main className="overflow-hidden px-4 pb-32 pt-16">
      <Container>
        <BooksProvider>
          <BooksDialogProvider>
            {children}
            <DialogRenderer />
          </BooksDialogProvider>
        </BooksProvider>
      </Container>
    </main>
  )
}
