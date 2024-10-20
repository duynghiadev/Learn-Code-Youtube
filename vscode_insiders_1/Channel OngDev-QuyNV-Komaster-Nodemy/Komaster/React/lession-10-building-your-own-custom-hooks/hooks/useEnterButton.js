import { useEffect } from 'react'

export const useEnterButton = (handleConfirm) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleConfirm()
        event.preventDefault()
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [handleConfirm])
}
