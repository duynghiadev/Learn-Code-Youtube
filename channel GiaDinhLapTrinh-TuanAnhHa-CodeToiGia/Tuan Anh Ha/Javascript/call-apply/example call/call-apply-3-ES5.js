/**
 * Đây là ví dụ trong file markdown
 */
/**
 * - Đây là code theo cấu trúc ES5
 *
 * - join(', '): Cái này là chuyển một mảng gồm các string -> thành một string được ngăn cách nhau bởi dấu phẩy
 */
// Đối tượng cơ bản "Person"
const Person = function (name, age) {
  this.name = name
  this.age = age
}

// Phương thức của "Person"
Person.prototype.sayHello = function () {
  console.log(`Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`)
}

// Đối tượng "Coder" kế thừa từ "Person"
const Coder = function (name, age, skills) {
  console.log('this Coder:', this)
  console.log('name:', name)
  console.log('age:', age)
  console.log('skills:', skills)
  console.log('Person.call(this, name, age):', Person)
  console.log('---------------------------------------')
  Person.call(this, name, age)
  this.skills = skills
}

// Đối tượng "Speaker" kế thừa từ "Person"
const Speaker = function (name, age, topics) {
  console.log('this Speaker:', this)
  console.log('name:', name)
  console.log('age:', age)
  console.log('topics:', topics)
  console.log('Person.call(this, name, age):', Person)
  console.log('---------------------------------------')
  Person.call(this, name, age)
  this.topics = topics
}

// Gọi phương thức của "Person" trên đối tượng "Coder"
Coder.prototype.introduce = function () {
  console.log('Coder.prototype.introduce:', this)
  Person.prototype.sayHello.call(this)
  console.log(`Tôi có kỹ năng: ${this.skills.join(', ')}.`)
}

// Gọi phương thức của "Person" trên đối tượng "Speaker"
Speaker.prototype.introduce = function () {
  console.log('Speaker.prototype.introduce:', this)
  Person.prototype.sayHello.call(this)
  console.log(`Tôi nói về: ${this.topics.join(', ')}.`)
}

// Tạo các đối tượng
const coder = new Coder('Alice', 25, ['JavaScript', 'Python'])
const speaker = new Speaker('Bob', 30, ['Technology', 'Motivation'])

// Gọi phương thức introduce của từng đối tượng
coder.introduce()
// Output: Xin chào, tôi là Alice và tôi 25 tuổi.
// Tôi có kỹ năng: JavaScript, Python.

console.log('---------------------------------------')

speaker.introduce()
// Output: Xin chào, tôi là Bob và tôi 30 tuổi.
// Tôi nói về: Technology, Motivation.
