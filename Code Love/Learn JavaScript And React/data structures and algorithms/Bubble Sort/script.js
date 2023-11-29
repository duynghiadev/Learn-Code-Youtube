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

console.log('a.length:', a.length)

for (let j = 0; j < a.length - 1; j++) {
  console.table({
    j: j,
    a_j: a[j],
    a_j_1: a[j + 1]
  })

  if (a[j] > a[j + 1]) {
    let tmp = a[j]
    a[j] = a[j + 1]
    a[j + 1] = tmp
  }
}

console.log('Result:', a)
