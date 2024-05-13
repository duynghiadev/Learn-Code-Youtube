/**
 * 1. function là function
 */
console.log('='.repeat(40))
console.log('Khai báo hàm --> Hàm bình thường --> có thể gọi hàm trước khi khai báo')
ham()
function ham() {
  console.log('Hàm declaration')
}

/**
 * 2. expression function
 */
console.log('='.repeat(40))
console.log('Biểu thức hàm --> không thể gọi trước khi khởi tạo')
const bien = function () {
  console.log('Hàm expression')
}
bien()

/**
 * function là object
 */
console.log('='.repeat(40))
console.log('function là object')

function hamObject() {}

hamObject.thuoctinh = 'thêm thuộc tính'
console.log('hamObject.thuoctinh:', hamObject.thuoctinh)

console.log('='.repeat(40))

const x = function (thamso) {
  return this.name + ' - ' + thamso
}

let object1 = { name: 'duynghiadev' }
let object2 = { name: 'ronaldo' }

console.log(x.call(object1, 'tham số 1'))
console.log(x.call(object2, 'tham số 2'))

/**
 * 3. function là property hoặc method của object
 */
console.log('='.repeat(40))
console.log('function là property hoặc method của object')
const hocCoBan = {
  name: 'Học Cơ Bản',
  getName: function () {
    return 'Gọi method: ' + this.name
  }
}
console.log(hocCoBan.getName())

const js = {
  name: 'duynghiadev - học deep javascript'
}
console.log(hocCoBan.getName.call(js))

/**
 * 4. callback
 */
console.log('='.repeat(40))
function callback() {
  console.log('Đây là callback')
}

function cha(thecallback) {
  console.log('Trước khi truyền vào callback')
  setTimeout(thecallback, 200)
  console.log('Phía sau callback')
}

cha(callback)

/**
 * 5. constructor function
 */
console.log('='.repeat(40))
console.log('constructor function')

function Constructor(name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}

const name = new Constructor('duynghiadev')
console.log('name constructor function:', name.getName())
