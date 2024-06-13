function solveEquation() {
  // Get coefficients from input fields
  let a = parseFloat(document.getElementById('input-a').value)
  let b = parseFloat(document.getElementById('input-b').value)
  let c = parseFloat(document.getElementById('input-c').value)

  // Calculate discriminant
  let delta = b ** 2 - 4 * a * c

  // Check the discriminant
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    document.getElementById('result').innerHTML = `Roots: x1 = ${x1}, x2 = ${x2}`
  } else if (delta === 0) {
    let x = -b / (2 * a)
    document.getElementById('result').innerHTML = `Double root: x = ${x}`
  } else {
    document.getElementById('result').innerHTML = 'No real roots'
  }
}
