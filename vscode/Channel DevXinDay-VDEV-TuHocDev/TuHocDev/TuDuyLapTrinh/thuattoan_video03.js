// chuỗi số 1: abcd1234
// chuỗi số 2: acd4b213

function charObj(string) {
  let charObj = {}
  console.log('🟢 Counting characters in string:', string)
  for (let char of string) {
    console.log('🔹 Processing character:', char)
    charObj[char] = ++charObj[char] || 1
    console.log('🔸 Character count updated:', charObj[char])
  }
  console.log('🔵 Character count object:', charObj)
  return charObj
}

function Sosanhchuoi(string1, string2) {
  // đếm số lần xuất hiện của các ký tự trong chuỗi 1 vào 1 object
  const objString1 = charObj(string1)
  console.log('🟠 Object for string 1:', objString1)

  console.log('------------------------------------------------') // Line separator

  // đếm số lần xuất hiện của các ký tự trong chuỗi 2 vào 1 object
  const objString2 = charObj(string2)
  console.log('🟠 Object for string 2:', objString2)

  // so sánh giữa 2 object
  if (Object.keys(objString1).length !== Object.keys(objString2).length) {
    console.log('🔻 Length of objects is not equal')
    return false
  }

  for (let key in string1) {
    if (objString1[key] !== objString2[key]) {
      console.log('🔻 Characters frequency not equal for key:', key)
      return false
    }
  }
  console.log('✅ Strings are equal')
  return true
}

console.log(Sosanhchuoi('abcd', 'acbd'))
console.log('------------------------------------------------')
console.log(Sosanhchuoi('abcd', 'ac23d'))
