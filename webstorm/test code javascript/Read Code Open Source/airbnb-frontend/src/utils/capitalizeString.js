export const capitalizeString = (str) => {
  return str
    .trim()
    .split(' ')
    .pop()
    .replace(/^\w/, (c) => c.toUpperCase())
}
