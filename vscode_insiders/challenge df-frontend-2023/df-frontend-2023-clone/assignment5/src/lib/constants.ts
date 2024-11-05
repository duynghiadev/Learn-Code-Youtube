export const BOOKS_DATA_KEY: string = 'booksStore'
export const BOOKS_PER_PAGE: number = 5

export const SPECIAL_CHARS: RegExp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/

export const PATHS = {
  ROOT: '/',
  AUTH: {
    LOGIN: '/auth/login',
  },
  BOOK: {
    ROOT: '/book',
    VIEW: (id: string) => `/book/${id}`,
  },
}
