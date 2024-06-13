/**
 * - Lưu ý: trong mảng gọi là phần tử, trong object gọi là thuộc tính
 *
 * - Lưu ý: Nếu truy xuất vào một phần tử (thuộc tính) không hợp lệ thì làm sao?
 * + Mà mình gán cho bằng 1 giá trị nào đó thì nó sinh ra mới cái giá trị đó luôn
 *
 * - Trong đoạn code của ví dụ trong bài này mình có truy cập vào 1 biến mà không có trong object đó. Mọi người lưu ý nha => Đó là biến bmi ✅✅✅
 */

// Bước 1: Tạo đối tượng cho John và Mark
let john = {
  fullName: 'John Doe',
  mass: 75, // đơn vị: kg
  height: 1.75, // đơn vị: mét
  // Bước 2: Tạo phương thức tính chỉ số BMI cho John
  calculateBMI: function () {
    this.bmi = this.mass / this.height ** 2
    console.log(`this.bmi of john: ${this.bmi}`)
    console.log('-------------------------')
    return this.bmi
  }
}

let mark = {
  fullName: 'Mark Smith',
  mass: 80, // đơn vị: kg
  height: 1.8, // đơn vị: mét
  // Bước 2: Tạo phương thức tính chỉ số BMI cho Mark
  calculateBMI: function () {
    this.bmi = this.mass / this.height ** 2
    console.log(`this.bmi of mark: ${this.bmi}`)
    console.log('-------------------------')
    return this.bmi
  }
}

// Bước 3: Gọi phương thức tính chỉ số BMI cho John và Mark
console.log(`john.calculateBMI(): ${john.calculateBMI()}`)
john.calculateBMI()

console.log(`mark.calculateBMI(): ${mark.calculateBMI()}`)
mark.calculateBMI()

console.log(`john.bmi: ${john.bmi}`)
console.log(`mark.bmi: ${mark.bmi}`)

console.log('-------------------------')

// Bước 4: So sánh chỉ số BMI và hiển thị kết quả
if (john.bmi > mark.bmi) {
  console.log(`${john.fullName} có chỉ số BMI cao hơn: ${john.bmi}`)
} else if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} có chỉ số BMI cao hơn: ${mark.bmi}`)
} else {
  console.log(`Chỉ số BMI của ${john.fullName} và ${mark.fullName} bằng nhau: ${john.bmi}`)
}
