// this is code example promise resolve

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
  return newSalary
}

increaseSalary(1000, 100)
  .then((newSalary) => {
    console.log('newSalary:', newSalary) // take a value from promise
  })
  .catch((error) => {
    console.log('error:', error) // if error so run that code
  })
