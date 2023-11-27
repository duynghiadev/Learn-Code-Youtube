export interface Book {
  id: string | number
  title: string
  author: string
  genre: string
}

export type BookList = Array<Book>
