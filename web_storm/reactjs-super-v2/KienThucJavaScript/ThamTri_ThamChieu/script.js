// tham trị
let message = 'Hello!'
let phrase = message
console.log('tham trị -> message === phrase:', message === phrase)

// ====================================================================

// tham chiếu

let user = {
  name: 'John'
}

let admin = user

admin.name = 'Peter'
console.log('tham trị -> user.name:', user.name)
console.log('tham trị -> admin.name:', admin.name)

// So sánh với tham chiếu
let a = {}
let b = a
console.log('So sánh tham chiếu: a == b:', a == b)
console.log('So sánh tham chiếu: a === b:', a === b)

let c = {}
let d = {}
console.log('So sánh tham chiếu: c == d:', c == d)
console.log('So sánh tham chiếu: c === d:', c === d)

// ====================================================================

// clone object (shallow copy)
let user_1 = {
  name: 'duynghiadev',
  age: 22
}
let cloneUser_1 = { ...user_1 }
cloneUser_1.name = 'Ronaldo'
console.log('clone object user_1.name:', user_1.name)
console.log('clone object cloneUser_1.name:', cloneUser_1.name)

// ====================================================================

// clone object (sài vòng lặp) --> shallow copy
let user_2 = {
  name: 'Messi',
  age: 33
}

let cloneUser_2 = {}

for (let key in user_2) {
  cloneUser_2[key] = user_2[key]
}
cloneUser_2.name = 'NeymarJr'
console.log('name in user_2 --> user_2.name:', user_2.name)
console.log('name in cloneUser_2 --> cloneUser_2.name:', cloneUser_2.name)

// ====================================================================

// deep clone

let user_3 = {
  name: 'duynghiadev',
  sizes: {
    height: 182,
    width: 50
  }
}
console.log('user_3.size.height:', user_3.sizes.height)

let cloneUser_3 = { ...user_3 }
console.log('user_3.sizes === cloneUser_3.sizes:', user_3.sizes === cloneUser_3.sizes) // true, Vì cùng object

// user_3 và cloneUser_3 chia sẻ sizes
user_3.sizes.width++ // Thay đổi thuộc tính từ một nơi
console.log('cloneUser_3.sizes.width:', cloneUser_3.sizes.width) // 51, Tại nơi khác kết quả cũng bị thay đổi theo

// ====================================================================

// deep clone (sử dụng JSON.parse(JSON.stringify()))

let user_4 = {
  name: 'duynghiadev',
  sizes: {
    height: 182,
    width: 50
  }
}
console.log('user_4.size.height:', user_4.sizes.height)

let cloneUser_4 = JSON.parse(JSON.stringify(user_4))
console.log('user_4.sizes === cloneUser_4.sizes:', user_4.sizes === cloneUser_4.sizes) // true, Vì cùng object

// user_4 và cloneUser_4 chia sẻ sizes
user_4.sizes.width++ // Thay đổi thuộc tính từ một nơi
console.log('cloneUser_4.sizes.width:', cloneUser_4.sizes.width) // 51, Tại nơi khác kết quả cũng bị thay đổi theo
