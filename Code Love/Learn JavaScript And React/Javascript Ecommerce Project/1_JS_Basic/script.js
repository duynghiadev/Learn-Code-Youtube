/**
 * Phần 1: Kiểu dữ liệu nguyên thủy ✅
 */

// 1. Tìm hiểu câu lệnh đầu tiên console.log
console.log("hello world")

// 2. Cách khai báo 1 biến trong JavaScript
var nameInfo

// 3. Khởi tạo giá trị cho biến
nameInfo = "duynghia"

// 4. Khai báo và khởi tạo cùng 1 câu lệnh
var nameInfo = "duynghia dev"

// 5. Các kiểu dữ liệu cơ bản trong JavaScript
// 5.1 Kiểu dữ liệu boolean
console.log(typeof true)
console.log(typeof false)
var isTrue = true
console.log(isTrue)

// 5.2 Kiểu dữ liệu number
console.log(typeof 12)
var y = 12
console.log(typeof y)

// 5.3 Kiểu dữ liệu string
console.log(typeof "hello")
console.log(typeof "hello")
console.log(typeof `hello`)

// 5.4 Kiểu dữ liệu undefined
var z
console.log(typeof z)

// 5.5 Kiểu dữ liệu null
console.log(typeof null)
var z2 = null
console.log(typeof z2)

/**
 * Phần 2: Kiểu dữ liệu mảng ✅
 */

// 1. Tại sao cần dữ liệu mảng
var car1 = "Toyota"
var car2 = "Ford"
var car3 = "BMW"

// 2. Cách khai báo mảng
var cars = ["Toyota", "Ford", "BMW"]

// 3. Các thành phần của một mảng
console.log(cars)
console.log(cars.length)
// 3.1 cars là tên mảng
// 3.2 length là chiều dài hay số phần tử có trong mảng
// 3.3 các giá trị trong mảng được gọi là các value items của mảng
// 3.4 các key của mảng được đánh số bắt đầu từ 0
// 3.5 giữa key và value được ngăn cách bằng dấu hai chấm (:)

// 4. Cách truy xuất lấy value và set lại value của mảng
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

// 4.1 gán lại value
cars[0] = "Toyota Edit"
cars[1] = "Ford Edit"
cars[2] = "BMW Edit"
console.log(cars)

// 5. Các hàm thông dụng thao tác với mảng

/**
 * Phần 2: Kiểu dữ liệu object ✅
 */
// 1. Tại sao cần dữ liệu object
var students = ["duy", 12, "minh", "7a"]

// 2. Cách khai báo object
var students1 = {
  name: "nghia",
  age: 12,
  class: "7a",
}

// 3. Các thành phần của 1 object

// 4. Cách truy xuất lấy value và set lại value của object
var x = "name"
console.log(students1.x)
console.log(students1.name)
console.log(students1[x])

// 5. Liên hệ với mảng
var car4 = ["Toyota", "Ford", "BMW"]
console.log(car4)
// ❌ => Mảng chẳng qua là trường hợp đặc biệt của object với key index bắt đầu từ 0 ❌

console.log(car4[0])
console.log(car4[1])
console.log(car4[2])
// ❌ => Trong lập trình không ai làm như thế này cả, nó rất là không thông minh ❌

// ✅ => Đây là giải pháp để lặp qua các phần tử trong mảng ✅
for (var index = 0; index < car4.length; index++) {
  console.log(index)
  console.log(car4[index])
}

// 6. Các hàm thông dụng thao tác với object

/**
 * Phần 3: let, const khai báo biến thay var ✅
 */
console.log(x1)
var x1 = 11
// ❌ => Tại vì khi trình biên dịch code khi nó dịch thì nó đọc tới biến x và phát hiện nó là biến global nên nó đưa biến x lên đầu tiên ❌

// ❌ => Tại vì sao nó lại không in ra 11 mà in undefined. Bản chất nó là 2 câu lệnh. Thứ nhất là khai báo biến cho nó. Thứ hai 2 gán giá trị khởi tạo ban đầu lên cho nó.Nó chỉ copy tên biến thôi chứ không có giá trị ❌

// ❌ => Khi chúng ta sử dụng biến var khi code thì rất khó để control được code mình đang code ❌

// Đây là khai báo biến let
let x2 = 12
console.log(x2)
// ❌ => Phải khai báo biến trước rồi mới chạy được. Nếu chưa khai báo mà chạy thì nó sẽ báo lỗi❌
