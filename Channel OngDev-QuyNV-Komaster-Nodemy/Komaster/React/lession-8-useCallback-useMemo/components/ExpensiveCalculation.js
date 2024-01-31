const expensiveCalculation = (num) => {
  console.log('Calculating...')
  for (let i = 0; i < 1000000000; i++) {
    num += 1
  }
  return num
}

export default expensiveCalculation
