function defineWord(word) {
  word = 'word'
  console.log(word)
}

let globalWord = 'hello'
defineWord(globalWord)
console.log(globalWord)

function checkout(book) {
  let copy = { ...book }
  copy.isCheckedOut = true
  return copy
}

let book = {
  title: 'Dế mèn phiêu lưu ký',
  author: 'Tô hoài',
  isCheckedOut: false
}

const checkoutBook = checkout(book)

console.log('checkoutBook:', checkoutBook)
console.log('book:', book)
