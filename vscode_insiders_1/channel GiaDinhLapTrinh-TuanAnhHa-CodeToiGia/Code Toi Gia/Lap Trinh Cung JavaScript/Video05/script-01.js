/**
 * Nếu giá trị mảng a trùng với giá trị mảng b, thì tạo ra 1 biến và gán giá trị là true, ngược lại là false
 *
 * => output: let isCheck = true or false
 */
const a = [1, 2, 3, 4]
const b = [1, 2, 3, 4]

let isCheck = true

if (a.length !== b.length) {
  isCheck = false
} else {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      isCheck = false
    }
  }
}

console.log('isCheck:', isCheck)
