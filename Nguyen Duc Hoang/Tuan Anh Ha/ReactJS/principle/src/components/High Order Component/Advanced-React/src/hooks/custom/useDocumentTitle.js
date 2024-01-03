import { useEffect } from 'react'

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title

    return () => {
      console.log('Clean up in custom hooks in useDocumentTitle!')
    }
  })
}

export default useDocumentTitle
