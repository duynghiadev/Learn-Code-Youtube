const findNumber = (num) => (func) => {
  const result = []
  for (let i = 0; i < num; i++) {
    if (func(i)) {
      result.push(i)
    }
  }
  return result
}

const result1 = findNumber(10)((number) => number % 2 === 1) // <10 và số lẻ
const result2 = findNumber(20)((number) => number % 2 === 0) // <20 và số chẳn
const result3 = findNumber(30)((number) => number % 3 === 2) // <30 và số chia 3 dư 2

console.log('result1:', result1)
console.log('result2:', result2)
console.log('result3:', result3)