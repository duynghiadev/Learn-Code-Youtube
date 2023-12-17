/**
 * Immediately Invoked Function Expression IIFE Là Gì | Justin Nguyen🚀
 */
// IIFE and JavaSscript Library
/**
 * Khi mình khai báo hàm như này thì nó có thể coi như là 1 biểu thức hàm (Expression Function)
 */
;(function () {
  console.log('Hello DuyNghiaDev')
})()
;(function () {
  var name = 'Duynghia 1'
  function print1() {
    console.log(`name1: ${name}`)
  }
  print1()
})()
;(function () {
  var name = 'Duynghia 2'
  function print2() {
    console.log(`name2: ${name}`)
  }
  print2()
  console.log('----------------------------------')
})()

// Dưới đây mình sẽ viết giống như 1 thư viện jquery
// $$('en').print()

// Ví dụ đây là file greet.js
;(function (global) {
  const Greet = function (lang) {
    return new Greet.init(lang)
  }
  Greet.init = function (lang) {
    this.lang = lang
  }
  const prints = {
    en: 'Hello',
    vi: 'Xin chào'
  }
  const languages = ['en', 'vi']
  Greet.init.prototype = Greet.prototype = {
    print: function (name) {
      console.log(`this.lang: ${this.lang}`)
      console.log(`name: ${name}`)
      console.log(`${prints[this.lang]} ${name}`)
      return this
    },
    setLanguage: function (lang) {
      if (languages.indexOf(lang) === -1) {
        throw 'Supported language'
      }
      this.lang = lang
      return this
    }
  }
  global.$$ = Greet
  return Greet
})(this)

// Mình đang tưởng tượng 2 cái file khác nhau nha mọi người. Và nhiều file thì cũng vậy thôi, nó cũng chạy y chang như vậy thôi !!!
// Ví dụ đây là file index.js.

/**
 * Nếu mình thêm 1 ngoại ngữ khác vào trong này, mà chưa được khai báo thì nó sẽ ra undefined và nó sẽ bắn ra lỗi mà mình đã khai báo trong throw ở trên, và dừng luôn cái chương trình của mình luôn. Cho nên, trong trường hợp thực tế mình nên sử dụng try catch (đó là cách bắt lỗi, có tên tiếng anh là Error Handling)
 */
// this.$$('en')
//   .print('Duy Nghia Dev IIFE 1')
//   .setLanguage('vi')
//   .print('Duy Nghia Dev IIFE 2')
//   .setLanguage('germany')
//   .print('Duy Nghia Dev IIFE 2')

try {
  this.$$('en')
    .print('Duy Nghia Dev IIFE 1')
    .setLanguage('vi')
    .print('Duy Nghia Dev IIFE 2')
    .setLanguage('germany')
    .print('Duy Nghia Dev IIFE 2')
} catch (error) {
  console.log(error)
}
