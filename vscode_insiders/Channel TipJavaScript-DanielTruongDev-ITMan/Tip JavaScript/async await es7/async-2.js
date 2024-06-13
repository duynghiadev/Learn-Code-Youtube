function slowSalary(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2)
    }, 3000)
  })
}

async function increaseSalary(base, increase) {
  const newSalary = await slowSalary(base, increase)
  console.log(`This is new salary: ${newSalary}`)
  return newSalary // always return a Promise
}

const newSalaryPromise = increaseSalary(1000, 100) // this is promise and return after 3 seconds
console.log(`newSalaryPromise::`, newSalaryPromise)
