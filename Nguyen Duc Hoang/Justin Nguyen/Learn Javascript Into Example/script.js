/**
 * Bài 1
 * Khai báo biến: var, let, const
 * @type {number}
 */
let i = 10
if (i === 10) {
  let i = 15
  console.log('i1:', i)
}
console.log('i2:', i)

/**
 * Bài 2
 * name/value pairs và object trong JavaScript
 * @type {number}
 */
let index = 10
let str = 'Duy Nghia Dev'
let object = { index, str } // Đây là khai báo object cách 1. Đặt biến ở bên ngoài
console.log('object:', object)

let object_1 = {
  index_1: 20,
  str_1: 40
} // Đây là cách khai báo object - cách 2
console.log('object_1:', object_1)

let object_2 = {
  id: index,
  name: str,
  gender: 'male',
  address: { number_home: 123, city: 'Da Nang', country: 'Viet Nam' },
  res: function () {
    return `${this.id}, ${this.name}, ${JSON.stringify(this.address)}, ${this.gender}, x10* = ${
      this.id * 10
    }`
  }
}
console.log('object_2:', object_2)

let result = object_2.res()
console.log('result:', result)

/**
 * Dưới đây là những cú pháp trong ES8
 */
console.log('Object.entries:', Object.entries(object_2))
console.log('Object.values:', Object.values(object_2))
console.log('Object.keys:', Object.keys(object_2))

const newObj = Object.assign({ age: 20 }, object_2)
console.log('newObj:', newObj)

/**
 * - Dưới đây là cú pháp của ES9: Đó là ta dùng destructuring
 * - Cách này thì mọi người thích dùng và dùng nhiều hơn cách Object.assign()
 * - Khác biệt giữa cái mình để phần tử vô trước và phần tử vô sau là:
 *  - Cái nào mình thêm trước thì nó sẽ vô trước, thì cũng như thế -> cái nào mình thêm vô sau thì nó sẽ vô sau
 *
 * @type {{res: function(): string, address: {number_home: number, country: string, city: string}, gender: string, name: string, id: number}}
 */
const newObjES9 = { grow: 170, ...object_2, scholl: 'VKU' }
console.log('newObjES9:', newObjES9)

/**
 * Cách này thì chúng ta sẽ tạo ra 1 thuộc tính mới (property) trong 1 object có sẵn
 */
object_2.duynghia = 'dev'
console.log('object_2_have_duynghia:', object_2)

/**
 * Dưới đây là method xóa phần tử trong 1 object có sẵn. Chúng ta dùng nhanh method delete
 * @type {{snack: string, book: string, drink: string}}
 */
const delElement = {
  book: 'Tôi tài giỏi, bạn cũng thế',
  drink: 'pepsi',
  snack: 'tomato'
}
delete delElement.snack
console.log('delElement:', delElement)
