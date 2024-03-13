/**
 * - Ví dụ dưới đây sẽ mô phỏng một tình huống phức tạp hơn, sử dụng apply() để thiết lập một hàm có thể nhận nhiều loại đối tượng và thực hiện một số xử lý động:
 *
 * - Trong ví dụ này, đối tượng manager có một phương thức process mà có thể xử lý mảng hoặc đối tượng. Sử dụng apply(), phương thức process kiểm tra loại dữ liệu đầu vào và chuyển hướng nó đến các phương thức con tương ứng (processArray hoặc processObject). Cả hai phương thức con đều được gọi bằng cách sử dụng apply() để truyền đối số một cách linh hoạt.
 */

// Tạo một đối tượng quản lý
let manager = {
  process: function (data) {
    console.log('this:', this)
    if (Array.isArray(data)) {
      return this.processArray.apply(this, data)
    } else if (typeof data === 'object') {
      return this.processObject.apply(this, [data])
    } else {
      return 'Không thể xử lý dữ liệu.'
    }
  },

  processArray: function () {
    var numbers = Array.prototype.slice.call(arguments)
    return 'Đã xử lý mảng: ' + numbers.join(', ')
  },

  processObject: function (obj) {
    let result = 'Đã xử lý đối tượng: '
    for (let key in obj) {
      console.log('key:', key)
      if (obj.hasOwnProperty(key)) {
        console.log('obj.hasOwnProperty(key):', obj.hasOwnProperty(key))
        result += key + ': ' + obj[key] + ', '
      }
    }
    return result.slice(0, -2) // Loại bỏ dấu phẩy cuối cùng
  }
}

// Sử dụng apply để gọi phương thức process với nhiều loại đối tượng
let arrayResult = manager.process.apply(manager, [[1, 2, 3, 4]])
let objectResult = manager.process.apply(manager, [{ name: 'John', age: 25, city: 'New York' }])
let stringResult = manager.process.apply(manager, ['Hello'])

console.log(arrayResult)
console.log(objectResult)
console.log(stringResult)
