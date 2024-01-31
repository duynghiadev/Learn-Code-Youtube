/**
 * - Higher Order Function:
 * - Hiểu đơn giản là đây là hàm cấp cao, trong đó nó chứa các hàm cấp thấp hơn của nó
 */
const workers = [
  { name: 'Peter', salary: 1000 },
  { name: 'Mary', salary: 2000 },
  { name: 'Joe', salary: 3999 }
]

const upSalary = (num, rate) => {
  return num + num * rate
}

const downSalary = (num, rate) => {
  return num - num * rate
}

const smartCaculator = (data, action, rate) => {
  let result = []
  for (let item of data) {
    let name = item.name
    let salary = action(item.salary, rate)

    console.log('item:', item)
    console.log('name:', name)

    result.push({ name, salary })
  }
  return result
}

let newSalaryUp = smartCaculator(workers, upSalary, 0.05)
let newSalaryDown = smartCaculator(workers, downSalary, 0.09)

console.log('newSalaryUp:', newSalaryUp)
console.log('newSalaryDown:', newSalaryDown)
