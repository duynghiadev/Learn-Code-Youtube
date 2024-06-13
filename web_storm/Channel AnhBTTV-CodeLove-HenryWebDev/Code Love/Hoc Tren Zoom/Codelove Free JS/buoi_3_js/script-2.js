// scope: phạm vi biến (dùng tử khóa var)
/**
 * Kết luận: khi nhắc đến let, const thì chúng sẽ nhớ đến block scope
 */

let nameInfo = 'duynghiadev'
console.log(`nameInfo: ${nameInfo}`)

if (true) {
  let nameInfoInIf = 'name info in if'
  console.log(`nameInfoInIf: ${nameInfoInIf}`)
}

let nameInfoInFunction = 'name info in function new'
function changeName() {
  let nameInfoInFunction = 'name info in function'
  console.log(`nameInfoInFunction: ${nameInfoInFunction}`)
}
changeName()
// console.log(`nameInfoInIf: ${nameInfoInIf}`) // error
