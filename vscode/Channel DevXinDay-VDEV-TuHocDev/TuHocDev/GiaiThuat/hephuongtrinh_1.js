// đây là code mình tự refactor lại

const coefficients = {
  a1: 3,
  b1: -5,
  c1: 32,
  a2: -4,
  b2: 1,
  c2: 6
}

const calculateY = () => {
  const { a1, a2, b1, b2, c1, c2 } = coefficients
  const determinant = b2 * a1 - a2 * b1

  if (determinant === 0) {
    throw new Error('The system of equations has no unique solution.')
  }
  return (a1 * c2 - a2 * c1) / determinant
}

const calculateX = () => {
  return (coefficients.c1 - coefficients.b1 * calculateY()) / coefficients.a1
}

try {
  const x = calculateX()
  const y = calculateY()
  console.log('X =', x)
  console.log('Y =', y)
} catch (error) {
  console.error(error.message)
}
