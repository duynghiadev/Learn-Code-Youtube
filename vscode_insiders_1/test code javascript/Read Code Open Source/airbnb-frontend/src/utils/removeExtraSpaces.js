export default function removeExtraSpaces(inputString) {
  return inputString.replace(/\s+/g, ' ').trim()
}
