'use client'

export const saveToLocalStorage = (
  key: string,
  value: ThemeType | IBook[] | IUser,
) => {
  if (typeof window !== 'undefined') {
    // Đoạn mã xử lý khi localStorage có sẵn
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    // Đoạn mã xử lý khi localStorage không có sẵn
    console.error('localStorage is not available in this environment')
  }
}
export const getFromLocalStorage = (
  key: string,
): ThemeType | IBook[] | IUser | null => {
  if (typeof window !== 'undefined') {
    // Đoạn mã xử lý khi localStorage có sẵn
    const storedValue = localStorage.getItem(key)

    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue) as ThemeType | IBook[]
        return parsedValue
      } catch (error) {
        console.error(`Error parsing localStorage item ${key}: ${error}`)
      }
    }
  } else {
    // Đoạn mã xử lý khi localStorage không có sẵn
    console.error('localStorage is not available in this environment')
  }
  return null
}
