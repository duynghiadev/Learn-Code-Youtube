export const convertDateTimeFormat = (str) => {
  const dateObject = new Date(str)
  if (isNaN(dateObject.getTime())) {
    const parts = str.split(/[-/]/)
    if (parts.length !== 3) {
      return null
    }
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null
    }
    return new Date(year, month, day)
  }
  return dateObject
}
