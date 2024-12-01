/**
 * Đây là cách làm search trên chat-GPT ✅✅✅
 */

/**
 * Dưới đây là một đoạn mã JavaScript để thực hiện thử thách của bạn, kết hợp Array, Object và Loop, cùng với một hàm để tạo một mảng ngẫu nhiên với n phần tử:
 */

// Bước 1: Tạo một hàm để tạo một mảng ngẫu nhiên với n phần tử
function generateRandomBills(n) {
  let bills = []
  for (let i = 0; i < n; i++) {
    bills.push(Math.floor(Math.random() * 300) + 1) // Tạo số ngẫu nhiên từ 1 đến 300
  }
  return bills
}

// Bước 2: Sử dụng hàm để tạo mảng hoá đơn
let johnBills = generateRandomBills(4) // Đổi số lượng hoá đơn tại đây
console.log("John's Bills:", johnBills)

// Bước 3: Tạo một Object chứa thông tin và phương thức tính tiền tip
let john = {
  fullName: 'John Doe',
  bills: johnBills,
  tips: [],
  totalPayments: [],
  // Bước 4: Thêm phương thức tính tiền tip và tổng tiền phải trả
  calculateTipsAndTotalPayments: function () {
    for (let i = 0; i < this.bills.length; i++) {
      let tipPercentage
      if (this.bills[i] < 50) {
        tipPercentage = 0.2 // 20%
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        tipPercentage = 0.15 // 15%
      } else {
        tipPercentage = 0.1 // 10%
      }

      this.tips.push(this.bills[i] * tipPercentage)
      this.totalPayments.push(this.bills[i] + this.tips[i])
    }
  }
}

// Bước 5: Gọi phương thức tính tiền tip và tổng tiền phải trả
john.calculateTipsAndTotalPayments()

// Bước 6: Hiển thị kết quả
console.log("John's Tips:", john.tips)
console.log("John's Total Payments:", john.totalPayments)

/**
 * Trong đoạn mã này, chúng ta sử dụng hàm generateRandomBills để tạo một mảng ngẫu nhiên của hoá đơn với n phần tử. Sau đó, chúng ta tạo một Object john chứa thông tin về hoá đơn, tips và tổng tiền phải trả. Phương thức calculateTipsAndTotalPayments được sử dụng để tính tiền tip và tổng tiền phải trả dựa trên quy luật đã nêu trong thử thách. Kết quả cuối cùng được hiển thị ra màn hình console.
 */
