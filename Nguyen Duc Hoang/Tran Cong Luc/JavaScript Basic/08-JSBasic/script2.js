/**
 * Đây là cách làm thứ 2 ✅
 */
let bills = [124, 48, 268]
console.log('bills:', bills)
// Function nhận vào 1 hóa đơn => Trả về tiền tip, và tính toán trên hóa đơn đó

function calTip(bill) {
  let percent
  if (bill < 50) {
    percent = 0.2 // 20%
  } else if (bill <= 200) {
    percent = 0.15 // 15%
  } else {
    percent = 0.1 // 10%
  }
  return percent * bill
}

/**
 * Dưới đây là 3 cách tính tiền tip
 * - Cách 1: là tính mỗi giá trị và đưa trực tiếp vào mảng luôn
 * - Cách 2: là đặt 1 biến tạm có giá trị là một mảng rỗng => rồi tính từng giá trị xong push vào biến tạm đó
 * - Cách 3: cách này thì mình cũng đặt một biến tạm là một cái mảng rỗng => Sau đó mình truy xuất vào mảng đó, bằng cách thêm giá trị lần lượt vào mảng đó
 * @type {*[]}
 */
let tips1 = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]
console.log('tips1:', tips1)

let tips2 = []
tips2.push(calTip(bills[0]))
tips2.push(calTip(bills[1]))
tips2.push(calTip(bills[2]))
console.log('tips2:', tips2)

let tips3 = [] // length = 0
tips3[tips3.length] = calTip(bills[0])
tips3[tips3.length] = calTip(bills[1])
tips3[tips3.length] = calTip(bills[2])
console.log('tips3:', tips3)

let finalValue = [tips1[0] + bills[0], tips2[1] + bills[1], tips3[2] + bills[2]]
console.log('finalValue:', finalValue)
