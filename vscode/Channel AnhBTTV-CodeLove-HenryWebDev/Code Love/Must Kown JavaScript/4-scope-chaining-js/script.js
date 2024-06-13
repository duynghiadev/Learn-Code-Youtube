// 1. Khai báo biến với từ khoá var (truước khi có es6)

// 1.1 Với từ khoá var biến có thể được khai báo lại trong cùng 1 scope

// 1.2 khi nói đến từ khoá var thì các bạn nghĩ đến ngay function scope

// 2. khai báo biến với từ khoá let, cont(es6)

// 2.1 Với từ khoá let biến không thể được khai báo lại trong cùng 1 scope
// let x = 10;
// let x = 20;

// 2.2 khi nói đến từ khoá let thì các bạn nghĩ đến ngay block scope
let y = 20
if (true) {
  let y = 30
  console.log('y in if', y)
}
console.log('y', y)

let nameInfor = 'global scope'
function inner() {
  let name = 'local scope in inner function'
  if (true) {
    let name = 'local scope in inner function IN IF'
    console.log('name', name)
    console.log('name in if', nameInfor)
  }
  console.log('name', name)
}
inner()
