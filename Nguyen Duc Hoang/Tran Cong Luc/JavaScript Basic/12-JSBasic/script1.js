/**
 * Đây là cách làm theo video✅✅✅
 */
// Có 3 dạng làm tròn trong Javascript (Math)
// Luôn Luôn Làm tròn xuống -> Math.floor()
// Luôn luôn làm tròn lên -> Math.ceil()
// Làm tròn theo quy tắc lấy mốc 0.5 làm chuẩn Math.round()
// >= 0.5 -> Làm tròn lên
// < 0.5 -> Làm tròn xuống

function randomArray(n, max) {
  let arr = []
  for (let index = 1; index <= n; index++) {
    let num = Math.random() * max // Số lẻ
    num = Math.ceil(num)
    arr.push(num)
  }
  return arr
}

let john = {
  firstName: 'John',
  lastName: 'Smith',
  bills: randomArray(10, 500),
  calTips: function () {
    //   Nếu số lượng hóa đơn là 10 => Chạy 10 lần để tính 10 tiền tip
    //   Nếu số lượng hóa đơn là 5 => Chạy 5 lần để tính 5 tiền tip
    //   => Số lượng hóa đơn được lấy từ bills.length
    this.tips = []
    this.totalValues = []
    let length = this.bills.length
    console.log('length:', length)

    for (let index = 0; index < length; index++) {
      let percent
      let bill = this.bills[index]
      if (bill < 50) {
        percent = 0.2 //20%
      } else if (bill <= 200) {
        percent = 0.15 //15%
      } else {
        percent = 0.1 //10%
      }
      this.tips[index] = bill * percent
      this.totalValues[index] = this.tips[index] + this.bills[index]
    }
  }
}

john.calTips()
console.log('john:', john)
