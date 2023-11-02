// 1. Khai báo biến
// var variable -- chương trình đang muốn khai báo 1 biến

// khai báo biến
var fullName
var firstName
var lastName

// value (giá trị) -- kiểu dữ liệu
// 2.1 Kiểu dữ liệu undefined
console.log(typeof undefined)
// gán biến bằng value
var x
console.log(x)

// 2.2 Kiểu dữ liệu boolean (true, false)
console.log(typeof true)
console.log(typeof false)

var isTrue = true
var isFalse = false
console.log(isTrue)
console.log(isFalse)
console.log(typeof isTrue)

// 2.3 Kiểu dữ liệu string
console.log(typeof 'ducdo')
console.log(typeof 'ducdo')
console.log(typeof `ducdo`)
var firstName = 'duc'
var lastName = 'do'
var fullName = `ducdo`

// 2.4 Kiểu dữ liệu number
console.log(typeof 10)
console.log(typeof 10.9)

// 2.5 Kiểu dữ liệu null
console.log(typeof null)
var isNull = null
console.log(typeof isNull)

// ở mỗi thời điểm chỉ mang 1 giá trị duy nhất và giá trị đấy không thể thay đổi được(value)

var nameInfo = 'ducdo'
// nameInfo = 'nhat duy';
console.log(nameInfo[0])
nameInfo[0] = 'm'
console.log(nameInfo)

// 1. cho hình vuông có cạnh là 10, tính chu vi và diện tích hình vuông
// 2. sử dụng alert và console để in ra kết quả
// + - * /

// 2. cho hình chữ nhật có chiều dài là 10, chiều rộng là 8.
// tính chu vi và diện tích hình chứ nhật

// comment
// cạnh của hình chữ nhật

/**
 * day la comment 1
 * day la comment 2
 * day la comment 3
 */
var x = 10

// operator
var x = 10
var y = 15

// operator math
var z = y % x
console.log(z)

// Một số build in khác
// hiển thị ô input nhập liệu
// var age = prompt('mời bạn nhập số tuổi của mình');
// console.log(age);
// // in ra màn hình nội dung nào đấy
// document.write('Quyết tâm học lập trình javascript');
// confirm('bạn đã đủ 18 tuổi chưa!');

// Nối chuỗi
// var s = 100;
// var result = 'diện tích của hình tròn là: ' + s + 'm2';
// console.log(result);

// bài tập
// var a = prompt('nhập chiều dài của hình chữ nhật');
// var b = prompt('nhập chiều rộng của hình chữ nhật');

// chuyển đổi  string to number
// a = +a;
// b = +b;

// console.log(typeof a);
// console.log(typeof b);

// chu vi
// var c = (a + b)*2;
// console.log('chu vi hinh chu nhat la: ' + c);

// chu vi và diện tích hình tròn
// const nhá
// const PI = 3.14;

let radius = +prompt('nhập bán kính hình tròn')
let chuvi = 2 * PI * radius
let dientich = PI * radius * radius
console.log('chu vi hình tròn là: ' + chuvi)
console.log('diện tích hình tròn là: ' + dientich)

// lịch sử es6
