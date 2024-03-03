// Pure function
export const isOddNumber = (number) => number % 2 === 1

export const countEvenNumbers = (numberList) => {
  if (!Array.isArray(numberList)) return 0

  return numberList.filter((x) => x % 2 === 0).length
}
