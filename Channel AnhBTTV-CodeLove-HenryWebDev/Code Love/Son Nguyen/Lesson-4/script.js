var name_1 = 5
var name_2 = 6
var name_6 = '8'
var name_7 = 8
console.log(name_1 + name_2)
console.log(name_1 - name_2)
console.log(name_1 * name_2)
console.log(name_1 / name_2) // chia lấy kết quả: kết quả bằng 0,83333333333 dư 5
console.log(name_1 % name_2) // chia lấy dư: kết quả bằng 0 dư 5

// Tăng thêm 1 đơn vị cho biến cũ, nhưng gán giá trị cũ cho biến mới
var name_3 = name_1++
console.log(name_1)
console.log(name_3)

var name_31 = name_1++
console.log(name_1)
console.log(name_31)

// Tăng lên 1 đơn vị cho biến cũ và gán vào biến mới
var name_4 = ++name_2
console.log(name_4)

console.log(name_1)
var name_5 = name_1--
console.log(name_5)

var name_8 = name_6 == name_7
console.log(name_8) // so sánh giá trị (value)

var name_8 = name_6 === name_7
console.log(name_8) // so sánh giá trị và kiểu dữ liệu (value and type)
