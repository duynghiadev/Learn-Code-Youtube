/**
 * - Đây là ví dụ trong file markdown
 *
 * - Dưới đây là một ví dụ nâng cao hơn về cách sử dụng bind() trong JavaScript để giải quyết vấn đề với sự thay đổi của giá trị this trong ngữ cảnh khác nhau:
 *
 * - Trong ví dụ này, chúng ta định nghĩa một hàm constructor Car để tạo đối tượng xe. Mỗi đối tượng xe có một phương thức displayInfo để hiển thị thông tin về xe.
 *
 * - Bằng cách sử dụng bind(), chúng ta tạo ra hai bản sao mới của phương thức displayInfo với giá trị this được xác định trước là car1 và car2. Khi chúng ta gọi car1Display() và car2Display(), mỗi phương thức in ra thông tin của đối tượng xe tương ứng (car1 và car2). Điều này cho phép chúng ta sử dụng cùng một phương thức cho các đối tượng khác nhau mà không cần phải thay đổi giá trị this mỗi lần gọi.
 */

// Một hàm constructor (constructor function)
function Car(make, model) {
  this.make = make
  this.model = model
}

// Phương thức hiển thị thông tin của xe
Car.prototype.displayInfo = function () {
  console.log(this.make + ' ' + this.model)
}

// Tạo một đối tượng car1 từ Car constructor
const car1 = new Car('Toyota', 'Camry')

// Tạo một đối tượng car2 từ Car constructor
const car2 = new Car('Honda', 'Accord')

// Sử dụng bind để tạo một bản sao mới của phương thức displayInfo với giá trị this là car1
const car1Display = car1.displayInfo.bind(car1)

// Sử dụng bind để tạo một bản sao mới của phương thức displayInfo với giá trị this là car2
const car2Display = car1.displayInfo.bind(car2)

// Gọi các phương thức đã được bind
car1Display() // In ra: Toyota Camry
car2Display() // In ra: Honda Accord
