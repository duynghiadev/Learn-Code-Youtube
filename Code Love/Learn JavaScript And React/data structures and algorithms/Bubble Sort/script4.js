/**
 * Video 4: Trong bài này mình sử dụng cách làm khác
 *
 * - Trong các bài trước thì mình lấy số đầu tiên của mảng so sánh với các số tiếp theo, và cứ thế so sánh đến phần tử cuối cùng. ✅
 *
 * - Nhưng trong bài này thì mình lại lấy số cuối cùng so sánh với các số đứng trước nó, nếu số cuối cùng bé hơn số đứng trước nó thì số cuối cùng lại chuyển dần lên đầu mảng. ✅
 */

let a = [100, 7, 5, 2, 8, 9, 400, 200, 150]

//yêu cầu sắp xếp mảng tăng dần
for (let i = 0; i < a.length - 1; i++) {
  for (let j = a.length - 1; j > i; j--) {
    if (a[j] < a[j - 1]) {
      let tmp = a[j]
      a[j] = a[j - 1]
      a[j - 1] = tmp
    }
  }
}

console.log(a)
console.log('hello')
