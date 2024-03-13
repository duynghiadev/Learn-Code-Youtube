/**
 * - Đây là code theo cấu trúc ES6 được chuyển từ file call-apply-3-ES5.js
 *
 * - Lưu ý: Trong arrow function không có khái niệm call và apply. Nó chỉ có trong function bình thường
 */
// Đối tượng cơ bản "Person"
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`)
  }
}

// Đối tượng "Coder" kế thừa từ "Person"
class Coder extends Person {
  constructor(name, age, skills) {
    console.log('name:', name)
    console.log('age:', age)
    console.log('skills:', skills)
    console.log('--------------------------------------')
    super(name, age)
    this.skills = skills
  }

  introduce() {
    super.sayHello()
    console.log('sayHello:', super.sayHello)
    console.log(`Tôi có kỹ năng: ${this.skills.join(', ')}.`)
    console.log('--------------------------------------')
  }
}

// Đối tượng "Speaker" kế thừa từ "Person"
class Speaker extends Person {
  constructor(name, age, topics) {
    console.log('name:', name)
    console.log('age:', age)
    console.log('topics:', topics)
    console.log('--------------------------------------')
    super(name, age)
    this.topics = topics
  }

  introduce() {
    super.sayHello()
    console.log('sayHello:', super.sayHello)
    console.log(`Tôi nói về: ${this.topics.join(', ')}.`)
    console.log('--------------------------------------')
  }
}

// Tạo các đối tượng
const coder = new Coder('Alice', 25, ['JavaScript', 'Python'])
const speaker = new Speaker('Bob', 30, ['Technology', 'Motivation'])

// Gọi phương thức introduce của từng đối tượng
coder.introduce()
// Output: Xin chào, tôi là Alice và tôi 25 tuổi.
// Tôi có kỹ năng: JavaScript, Python.

speaker.introduce()
// Output: Xin chào, tôi là Bob và tôi 30 tuổi.
// Tôi nói về: Technology, Motivation.
