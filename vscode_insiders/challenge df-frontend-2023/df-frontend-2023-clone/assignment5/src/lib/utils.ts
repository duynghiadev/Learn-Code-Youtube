export function getLocalStorageItem(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) as string)
  } catch (error) {
    return null
  }
}

export function setLocalStorageItem(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function trimTrim(text: string) {
  return text.replace(/\s+/g, ' ').trim()
}
