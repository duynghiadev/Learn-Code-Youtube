/**
 * Đây là ví dụ trong file markdown
 */
const add = function (a, b) {
  return a + b
}

const addFive = add.bind(null, 5)
console.log(addFive(3)) // In ra: 8
