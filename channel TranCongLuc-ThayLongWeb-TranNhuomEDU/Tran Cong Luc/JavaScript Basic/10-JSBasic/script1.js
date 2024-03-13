/**
 * Đây là cách làm sử dụng object
 */
// Chúng ta có 2 kiểu define function
// Đây là cách thứ 1
function calBMI() {
  console.log('this calBMI:', this)
  // return this.mass / (this.height * this.height)
  this.bmi = this.mass / (this.height * this.height)
}

// Đây là cách thứ 2
// let calBMI2 = function () {
//   console.log('this callBMI2:', this)
//   return this.mass / (this.height * this.height)
// }

console.log('typeof calBMI:', typeof calBMI)
// console.log('typeof calBMI2:', typeof calBMI2)

let john = {
  fullName: 'John Smith',
  mass: 59,
  height: 1.65,
  /**
   * - Ở dưới là ta đang trỏ tới hàm và thực thi code ở trong hàm đó. Nó khác với kiểu này calBMI() => Kiểu đó là kiểu thực thi hàm và sau đó mới thực thi
   * - Kiểu như ta làm dưới đây nó giống với kiểu này nè: const calBMI = () => {}. Giống kiểu đó đó => có nghĩa là chúng ta trỏ tới cái biến để lưu giá trị của hàm đó => Chứ không phải thực thi hàm đó lun
   *
   * - Bởi vì giá trị của biến được lưu trong bộ nhớ máy tính. Và chúng ta gọi đến biến đó để lấy giá trị của hàm đó ra
   * - Lưu ý: biến this trong 2 ngữ cảnh khác nhau thì nó là object khác nhau
   */
  BMI: calBMI
  // Chúng ta không nên khai báo kiểu này. Vì khi nhiều nơi dùng 1 hàm này, mà mỗi chỗ chúng ta lại khai báo thì không tối ưu lắm => Chúng ta nên tách thành hàm riêng bên ngoài => Rồi sau đó trỏ tới hàm đó là được
  // BMI: function () {
  //   //   To Do:...
  //   return this.mass / (this.height * this.height)
  // }
}

let mark = {
  fullName: 'Mark Smith',
  mass: 69,
  height: 1.7,
  /**
   * - Ở dưới là ta đang trỏ tới hàm và thực thi code ở trong hàm đó. Nó khác với kiểu này calBMI() => Kiểu đó là kiểu thực thi hàm và sau đó mới thực thi
   * - Kiểu như ta làm dưới đây nó giống với kiểu này nè: const calBMI = () => {}. Giống kiểu đó đó => có nghĩa là chúng ta trỏ tới cái biến để lưu giá trị của hàm đó => Chứ không phải thực thi hàm đó lun
   *
   * - Bởi vì giá trị của biến được lưu trong bộ nhớ máy tính. Và chúng ta gọi đến biến đó để lấy giá trị của hàm đó ra
   * - Lưu ý: biến this trong 2 ngữ cảnh khác nhau thì nó là object khác nhau
   */
  BMI: calBMI
  // Chúng ta không nên khai báo kiểu này. Vì khi nhiều nơi dùng 1 hàm này, mà mỗi chỗ chúng ta lại khai báo thì không tối ưu lắm => Chúng ta nên tách thành hàm riêng bên ngoài => Rồi sau đó trỏ tới hàm đó là được
  // BMI: function () {
  //   //   To Do:...
  //   return this.mass / (this.height * this.height)
  // }
}

console.log('BMI John:', john.BMI())
console.log('BMI John is:', john.BMI)
console.log('BMI Mark:', mark.BMI())
console.log('BMI Mark is:', mark.BMI)

john.BMI()
mark.BMI()

// Sau khi chúng ta thay đổi cách khai báo trong hàm calMBI() rồi thì => chúng ta cũng sẽ thay đổi cách so sánh luôn
// if (john.BMI() > mark.BMI()) {
//   console.log('BMI của john lớn hơn BMI của mark')
// } else if (john.BMI() < mark.BMI()) {
//   console.log('BMI của john nhỏ hơn BMI của mark')
// } else {
//   console.log('BMI của john bằng nhau BMI của mark')
// }

console.log('BMI John:', john.bmi)
console.log('BMI Mark:', mark.bmi)

if (john.bmi > mark.bmi) {
  console.log('BMI của john lớn hơn BMI của mark')
} else if (john.bmi < mark.bmi) {
  console.log('BMI của john nhỏ hơn BMI của mark')
} else {
  console.log('BMI của john bằng nhau BMI của mark')
}

/**
 * - Lưu ý: trong mảng gọi là phần tử, trong object gọi là thuộc tính
 *
 * - Lưu ý: Nếu truy xuất vào một phần tử (thuộc tính) không hợp lệ thì làm sao?
 * + Mà mình gán cho bằng 1 giá trị nào đó thì nó sinh ra mới cái giá trị đó luôn
 */
