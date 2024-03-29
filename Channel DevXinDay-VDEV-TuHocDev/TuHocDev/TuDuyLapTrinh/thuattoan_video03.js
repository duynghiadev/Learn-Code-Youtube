// chuỗi số 1: abcd1234
// chuỗi số 2: acd4b213

function charObj(string) {
  let charObj = {}
  for (let char of string) {
    charObj[char] = ++charObj[char] || 1
  }
  return charObj
}

function Sosanhchuoi(string1, string2) {
  // đếm số lần xuất hiện của các ký tự trong chuỗi 1 vào 1 object
  const objString1 = charObj(string1)

  // đếm số lần xuất hiện của các ký tự trong chuỗi 2 vào 1 object
  const objString2 = charObj(string2)

  // so sánh giữa 2 object
  if (Object.keys(objString1).length !== Object.keys(objString2).length) return false

  for (let key in string1) {
    if (objString1[key] !== objString2[key]) return false
  }
  return true
}

console.log(Sosanhchuoi('abcd', 'acbd'))
console.log(Sosanhchuoi('abcd', 'ac23d'))
