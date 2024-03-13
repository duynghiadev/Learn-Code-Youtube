let age = 18
let firstName = 'duynghiadev'

console.log('age', 16)
console.log('age >= 20', age >= 20)
console.log('age < 30', age < 30)
console.log('!(age >= 30)', !(age >= 30))

if (age < 18) {
  console.log(`${firstName} is a student`)
} else if (age >= 13 && age <= 18) {
  console.log(`${firstName} is a simple people`)
} else if (age > 18 && age < 30) {
  console.log(`${firstName} is a man`)
} else {
  console.log(`${firstName} is a grow man`)
}
