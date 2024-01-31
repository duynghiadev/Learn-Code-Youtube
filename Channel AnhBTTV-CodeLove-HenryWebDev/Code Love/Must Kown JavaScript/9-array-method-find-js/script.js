/**
 * - Dưới đây là phương thức find, và cách nó thực thi
 * - Hàm sẽ return phần tử đầu tiên nếu các phần tử trong mảng thỏa mãn điều kiện
 *
 * - Lưu ý: Hãy nhớ là hàm sẽ return phần tử đầu tiên nhé ✅✅✅
 */
const array = [4, 5, 7, 2]
const found = array.find((element, index) => {
  console.table({
    runs: index,
    value: element
  })
  return element > 4
})
console.log('found:', found)

/**
 * - Dưới đây là mình sẽ build lại phương thức find này, dựa trên cách cái hàm đó hoạt động
 * => Từ đó mình sẽ hiểu hơn về cái luồng chạy của nó ✅✅✅
 *
 * - Các bạn lưu ý cái prototype này nó là phương thức của tất cả kiểu dữ liệu Array nhé
 * - Thì khi các bạn thêm cái phương thức vào trong cái Array ở trong cái Array thì các bạn phải sử dụng Array.prototype... (kiểu như đấy các bạn nhé)
 */
Array.prototype.findCustom = function (callback) {
  console.log(callback)
  console.log('callback')
  console.log(this) // this là cái mà chúng đang gọi tới => đó là biến array

  for (let item of this) {
    const isTrue = callback(item)
    console.log('isTrue in core is', isTrue)

    if (isTrue) {
      return item
    }
  }
  return undefined
}

const data = array.findCustom(function (element) {
  if (element > 4) {
    return true
  }
  return false
})

console.log('data:', data)
