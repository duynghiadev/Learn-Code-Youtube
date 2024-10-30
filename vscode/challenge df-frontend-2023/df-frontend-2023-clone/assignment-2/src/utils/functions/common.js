import { BOOKS_PER_PAGE } from '../constants'

export function getURLParams(key) {
  if (typeof window === 'undefined') {
    return null
  }

  const query = new URLSearchParams(window.location.search)
  const value = query.get(key)
  return value
}

export function setURLParams(key, value) {
  if (typeof window === 'undefined') {
    return null
  }

  const query = new URLSearchParams(window.location.search)
  query.set(key, value)
  window.history.replaceState(null, null, `?${query.toString()}`)
}

export function removeURLParams(key) {
  if (typeof window === 'undefined') {
    return null
  }

  const query = new URLSearchParams(window.location.search)
  query.delete(key)
  window.history.replaceState(null, null, `?${query.toString()}`)
}

export function generateRandomString() {
  return Math.random().toString(36).substring(2, 15)
}

// @see: https://www.joshwcomeau.com/react/dark-mode/
export function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode')
  const hasPersistedPreference = typeof persistedColorPreference === 'string'
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light'
}

export function splitListIntoPages(list, itemsPerPage = BOOKS_PER_PAGE) {
  const pages = Math.ceil(list.length / itemsPerPage)

  const newListWithPagination = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return list.slice(start, start + itemsPerPage)
  })

  return newListWithPagination
}
