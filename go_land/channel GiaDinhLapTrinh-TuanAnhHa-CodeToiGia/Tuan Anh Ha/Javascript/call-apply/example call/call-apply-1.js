/**
 * Đây là ví dụ trong file markdown
 */
const person = {
  name: 'Alice',
  age: 30,
  introduce: function (greeting) {
    console.log(`${greeting}! Tôi là ${this.name} và tôi ${this.age} tuổi.`)
  }
}

person.introduce('Xin chào') // Output: Xin chào! Tôi là Alice và tôi 30 tuổi.
