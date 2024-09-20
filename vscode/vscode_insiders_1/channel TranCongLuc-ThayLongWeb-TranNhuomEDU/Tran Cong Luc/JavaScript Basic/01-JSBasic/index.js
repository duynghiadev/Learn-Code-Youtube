/**
 * Đây là file giải bài tập
 */
// Bước 1: Lưu mass và height của Mark và John vào các biến
var markMass = 70 // Khối lượng của Mark (đơn vị: kg)
var markHeight = 1.75 // Chiều cao của Mark (đơn vị: mét)

var johnMass = 80 // Khối lượng của John (đơn vị: kg)
var johnHeight = 1.8 // Chiều cao của John (đơn vị: mét)

// Bước 2: Tính toán chỉ số BMI của cả hai người (** là phép toán lũy thừa)
var markBMI = markMass / markHeight ** 2
var johnBMI = johnMass / johnHeight ** 2

// Bước 3: Tạo biến luận lý để so sánh BMI của Mark và John
var markGreaterThanJohn = markBMI > johnBMI

// Bước 4: In kết quả so sánh
if (markGreaterThanJohn) {
  // nếu là true thì chạy vào dòng này
  console.log('BMI của Mark lớn hơn BMI của John.')
} else {
  // nếu là false thì chạy vào dòng này
  console.log('BMI của Mark không lớn hơn BMI của John.')
}

// Ngược lại so sánh (Đoạn code dưới này tương tự đoạn code trên)
if (johnBMI > markBMI) {
  console.log('BMI của John lớn hơn BMI của Mark.')
} else {
  console.log('BMI của John không lớn hơn BMI của Mark.')
}
