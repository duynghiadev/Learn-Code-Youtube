// Currying is function, so that it return new function

function findNumber(num) {
  return function (func) {
    const result = []
    for (let i = 0; i < num; i++) {
      if (func(i)) {
        result.push(i)
      }
    }
    return result
  }
}

const value_1 = findNumber(10)((number) => number % 2 === 0)
const value_2 = findNumber(20)((number) => number % 2 === 1)
const value_3 = findNumber(30)((number) => number % 3 === 2)

console.log('value_1:', value_1)
console.log('value_2:', value_2)
console.log('value_3:', value_3)
