function slowSalary(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Kế hoạch tan vỡ, nhanh chóng tăng lương'))
    }, 3000)
  })
}

async function increaseSalary(base, increase) {
  try {
    const newSalary = await slowSalary(base, increase)
    return newSalary
  } catch (error) {
    // Handle the error here
    const newSalary = base * 2
    console.log('Error get newSalary:', error.message)
    return newSalary
  }
}

const base = 1000 // Define base variable
const increase = 100 // Define increase variable

increaseSalary(base, increase)
  .then((newSalary) => {
    console.log('newSalary:', newSalary)
  })
  .catch((error) => {
    // This block will only be executed if there was an error in increaseSalary function
    console.log('Error in increaseSalary:', error.message)
  })
