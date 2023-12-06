let firstName = 'duynghiadev'
let job = 'teacher'

switch (job) {
  case 'docter':
    console.log(`${firstName} is a docter`)
    break
  case 'designer':
    console.log(`${firstName} is a designer`)
    break
  case 'worker':
    console.log(`${firstName} is a worker`)
    break

  default:
    console.log(`${firstName} la mot nguoi co cong viec nao do`)
    break
}

/**
 * other example: this is a code convert code from lecture 2 to lecture (switch/case)
 */
console.log('==========================switch case==========================')
let age = 18
let firstName_1 = 'duynghiadev'

console.log('age', age)

switch (true) {
  case age < 18:
    console.log(`${firstName_1} is a student`)
    break

  case age >= 13 && age <= 18:
    console.log(`${firstName_1} is a simple people`)
    break

  case age > 18 && age < 30:
    console.log(`${firstName_1} is a man`)
    break

  default:
    console.log(`${firstName_1} is a grown man`)
    break
}
