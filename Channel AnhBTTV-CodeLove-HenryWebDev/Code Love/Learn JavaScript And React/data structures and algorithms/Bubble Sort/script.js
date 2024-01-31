/**
 * Video 1: Bài toán này chỉ áp dụng cho mảng có 2 phần tử. Muốn chạy nhiều hơn 2 phần từ thì học mấy bài sau nhé !!
 */

// Buble sort: hãy search trên chat-GPT và google tìm hiểu thêm về thuật toán này

let a = [
  100, // Ví dụ đây là mỗi phần tử ta đặt tên là j => a[j] = a[0] = 100
  7 // Tiếp theo đây là phần tử tiếp theo của j => có nghĩa là j+1 => a[j+1] = a[0+1] = a[1] = 7
]

/**
 * - Yêu cầu sắp xếp mảng này theo thứ tự tăng dần
 * - Trong mảng hiện tại ta có 2 phần tử 100 và 7. Theo thứ tự của mảng là a[0] và a[1]
 * - Nếu a[0] > a[1] thì a[0] phải đứng sau a[1] => Ta được mảng [7, 100]
 */

/**
 * - Vì sao ta phải đặt điều kiện là (j < a.length - 1)? ❌
 * - Bởi vì trong mảng a ta có được 2 phần tử. Nhưng mà vòng lặp for khi lặp qua mảng thì bắt đầu từ 0 (mà 0 là vị trí đầu tiên trong mảng, tức là số 100), tiếp tục như thế khi j chạy qua số 1 (tức là số 7 trong mảng).
 * - Thì qua 2 lần chạy như thế là j đã lặp xong mảng a rồi. Khi lặp xong mảng a và kết thúc thì biến lặp j dừng lại ở số 1.
 * - Nếu mà chúng ta để điều kiện là j < a.length (tức là j < 3). Nếu như thế thì biến lặp j phải chạy 1 lần nữa (tức là j = 2), mà trong mảng không có phần tử thứ 2. Tiếp tục chạy sẽ sinh ra lỗi
 * - Vì vậy, ta phải đặt điều kiện là j < a.length - 1 (điều kiện lúc này sẽ là j < 2), lúc này j sẽ lặp đến phần từ thứ 1 để thỏa mãn điều kiện
 */

console.log('a.length:', a.length)

for (let j = 0; j < a.length - 1; j++) {
  console.table({
    j: j,
    a_j: a[j],
    a_j_1: a[j + 1]
  })

  if (a[j] > a[j + 1]) {
    let tmp = a[j]
    console.log('tmp_current_a[j]:', a[j])
    a[j] = a[j + 1]
    console.log('tmp_1_a[j]:', a[j])
    a[j + 1] = tmp
    console.log('tmp_2_a[j+1]:', a[j + 1])
    console.log('let tmp:', tmp)
  }
}

console.log('----------------------')
console.log('Result:', a)
