// Example 1: 👍
// console.log(x)
// var x = 5

/*
 * - Cách code nó biên dịch như này nè:
 * var x
 * console.log(x)
 * x = 5
 */

// Example 2: 👍
var y = 2
function getY() {
  if (false) {
    var y = 10
  }
  console.log('y:', y)
  /*
   * - Thực chất đoạn code này nó chạy như này nè:
   * var y
   * if (false) {
   *   y = 10
   * }
   * console.log('y:', y) // console chạy giá trị y lúc khai báo rồi log ra => undefined
   * - Lưu ý: 2 biến y đó không liên quan gì hết. Cẩn thận nhé
   */
}
getY()

// Example 3: Cách khắc phục là dùng let 👍
var y_1 = 2
function getY_2() {
  if (false) {
    let y_1 = 10
  }
  console.log('y_1:', y_1)
}
getY_2()
