// Higher Order Function
function cha() {
  let x = 10
  return function con(p) {
    x++
    return x + p
  }
}

console.log('cha():', cha())
console.log('cha()():', cha()())
console.log('cha()(1):', cha()(1))

const bien = cha()
console.log('bien(1):', bien(1))
console.log('bien(1):', bien(1))
