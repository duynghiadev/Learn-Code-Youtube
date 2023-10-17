/**
 * Phần 1: Kiểu dữ liệu nguyên thủy
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
 * Phần 2: Kiểu dữ liệu mảng
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
a[0] = "Toyota Edit"
a[1] = "Ford Edit"
a[2] = "BMW Edit"
console.log(cars)

// 5. Các hàm thông dụng thao tác với mảng
