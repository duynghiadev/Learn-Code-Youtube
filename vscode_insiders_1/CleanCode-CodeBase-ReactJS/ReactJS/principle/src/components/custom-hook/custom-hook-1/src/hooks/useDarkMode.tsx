/**
 * Trong ví dụ này, useDarkMode là custom hook chịu trách nhiệm quản lý trạng thái dark mode. Các components khác trong ứng dụng sử dụng hook này để cập nhật giao diện người dùng khi chế độ dark mode thay đổi.
 */
import { useState, useEffect } from 'react'

interface DarkModeHook {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const useDarkMode = (): DarkModeHook => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  // Thiết lập ứng dụng cho chế độ dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  return { isDarkMode, toggleDarkMode }
}

export default useDarkMode
