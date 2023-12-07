/**
 * Làm bài tập thực hành về mảng (Array)
 */
/**
 * Đây là cách làm thứ nhất✅
 * @type {number[]}
 */
// Bước 1: Tạo mảng chứa thông tin của bills
let bills = [124, 48, 268]

// Bước 2: Tạo function tính tiền tip
function calculateTip(bill) {
  if (bill < 50) {
    return bill * 0.2 // 20% tip
  } else if (bill >= 50 && bill <= 200) {
    return bill * 0.15 // 15% tip
  } else {
    return bill * 0.1 // 10% tip
  }
}

// Bước 3: Tính tiền tip và tổng tiền phải trả
let tips = bills.map((bill) => {
  console.log('bill in tips:', bills[0])
  console.log('bill in tips:', bills[1])
  console.log('bill in tips:', bills[2])

  console.log(`calculateTip(bill): ${calculateTip(bill)}`)
  console.log('-------------------------')

  return calculateTip(bill)
})

let totalPayments = bills.map((bill, index) => {
  console.log(`bill in function totalPaments: ${bill}`)
  console.log(`tips[index]: ${tips[index]}`)
  console.log(`bill + tips[index]: ${bill + tips[index]}`)
  console.log('-------------------------')

  return bill + tips[index]
})

// In kết quả
console.log('Bills:', bills)
console.log('Tips:', tips)
console.log('Total Payments:', totalPayments)

/**
 * Trong đoạn mã này, chúng ta sử dụng mảng bills để lưu giữ thông tin về các hoá đơn. Function calculateTip nhận vào một giá trị hoá đơn và trả về số tiền tip tương ứng theo quy tắc đã đề cập.
 *
 * Chúng ta sử dụng phương thức map để tạo ra mảng tips, trong đó mỗi phần tử là số tiền tip tương ứng với hoá đơn trong mảng bills. Cuối cùng, chúng ta sử dụng map để tính tổng tiền phải trả (totalPayments) bằng cách cộng giá trị hoá đơn và số tiền tip tương ứng. Kết quả cuối cùng được in ra console.
 */
