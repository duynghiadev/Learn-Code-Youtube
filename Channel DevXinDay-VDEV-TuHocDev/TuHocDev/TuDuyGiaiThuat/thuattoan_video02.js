// --> Đây là bài toán: tìm phần tử lặp lại nhiều nhất trong string

let string = 'abcdefaaa'
let charObj = {}
let max = 0
let charmax = ''

// Bước 1: Duyệt qua toàn bộ chuỗi và lưu tạm vào object
for (let char of string) {
  // nên tìm hiểu thêm for...in
  console.log('char in string:', char)

  if (charObj[char]) {
    charObj[char] = charObj[char] + 1
  } else {
    charObj[char] = 1
  }
}
console.log('charObj:', charObj)

// Bước 2: Lấy số lần số hiện nhiều nhất

// Nên dùng: Object.key(obj)
// Object.entries(object) = [key, value]
// key in Object

for (let key in charObj) {
  console.log('key in charObj:', key)
  if (charObj[key] > max) {
    max = charObj[key]
    charmax = key
  }
}
console.log('👉 Result: 👉 charmax:', charmax, 'and max:', max)
