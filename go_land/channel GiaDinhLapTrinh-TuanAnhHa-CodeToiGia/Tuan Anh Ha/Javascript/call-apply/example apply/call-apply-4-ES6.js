/**
 * - Đây là code theo cấu trúc ES6 được chuyển tù file call-apply-3-ES5.js
 *
 * - Lưu ý rằng trong ES6, chúng ta đã thay thế var bằng const và let. Sử dụng template literals (${...}) để biểu diễn chuỗi một cách rõ ràng hơn. Hàm arrow (() => {...}) được sử dụng để làm ngắn gọn cú pháp của hàm, đặc biệt là trong phương thức processObject sử dụng Object.entries và map. Thêm nữa, chúng ta có thể truyền đối số vào hàm một cách thuận tiện hơn với cú pháp ...numbers trong hàm processArray.
 */
// Tạo một đối tượng quản lý
const manager = {
  process: function (data) {
    console.log('this of manager:', this)
    console.log('-----------------------------------')
    if (Array.isArray(data)) {
      return this.processArray(...data)
    } else if (typeof data === 'object') {
      return this.processObject(data)
    } else {
      return 'Không thể xử lý dữ liệu.'
    }
  },

  processArray: function (...numbers) {
    return `Đã xử lý mảng: ${numbers.join(', ')}`
  },

  mapProcessObject: ([key, value]) => {
    console.log('key:', key)
    console.log('value:', value)
    return `${key}: ${value}`
  },

  processObject: function (obj) {
    const result = Object.entries(obj).map(this.mapProcessObject).join(', ')
    return `Đã xử lý đối tượng: ${result}`
  }
}

// Sử dụng apply để gọi phương thức process với nhiều loại đối tượng
const arrayResult = manager.process([1, 2, 3, 4])
const objectResult = manager.process({ name: 'John', age: 25, city: 'New York' })
const stringResult = manager.process('Hello')

console.log(arrayResult)
console.log(objectResult)
console.log(stringResult)
