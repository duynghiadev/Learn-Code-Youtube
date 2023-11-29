/**
 * Video 2: Trong bài học này chúng ta sẽ học về sắp xếp mảng có 3 phần tử
 */

let a = [100, 7, 5]
console.log('This is array a:', a)
console.log('--------------------------------------------')

// Yêu cầu mảng sắp xếp tăng dần ra kết quả như này: [5, 7, 100]

// 100,7,	5
// j = 0, 7,		100,5
// j = 1, 7,5,		100

/**
 * - Nếu ta so sánh theo cách dùng 2 vòng lặp thì ta luôn có: a[0] < a[1] < a[2]
 * - So sánh theo cách này thì ta luôn so sánh 2 số ở vị trí cạnh nhau. Nếu mà thằng nào lớn hơn thì ta đẩy về phía sau. Và cứ thế ta so sánh đến cuối dãy và ta được số lớn nhất nằm ở cuối dãy
 */

for (let i = 0; i < a.length - 1; i++) {
  console.log('i current is:', i)
  console.log('Array current of i is 🚀:', a)
  for (let j = 0; j < a.length - 1; j++) {
    console.log('i current is:', i)
    console.log('j current is:', j)
    console.log('Array current of j is 🚀:', a)

    console.table({
      i: i,
      j: j,
      a_j: a[j],
      a_j_1: a[j + 1],
      a_i: a[i],
      a_i_1: a[i + 1]
    })

    if (a[j] > a[j + 1]) {
      let tmp = a[j]
      console.log('i_1:', i)
      console.log('tmp_current_a[j]:', a[j])
      a[j] = a[j + 1]
      console.log('i_2:', i)
      console.log('tmp_1_a[j]:', a[j])
      console.log('tmp_2_a[j+1]_1:', a[j + 1])
      a[j + 1] = tmp
      console.log('i_3:', i)
      console.log('tmp_2_a[j+1]_2:', a[j + 1])
      console.log('let tmp is [j+1]:', tmp)
      console.log('Result:', a)
      console.log('--------------------------------------------')
    }
  }
}

console.log('--------------------------------------------')
console.log('Result:', a)

// - Dưới đây là các bước thuật toán này chạy:
// + khi i = 0; lúc này gặp loop j -> sau mỗi vòng lặp bạn sẽ được số lớn nhất nổi lên trên
// + khi i = 1; lúc này gặp loop j -> sau mỗi vòng lặp bạn sẽ được số lớn thứ hai nổi lên trên

/**
 * - Dưới đây là ta giải thích tại mảng lúc này là [7, 5, 100]. Vì đoạn này khó hiểu nhất ✅✅✅
 * - Lưu ý: lúc này ta đang so sánh 2 phần tử là 7 và 5 ❌❌❌
 * - Nhắc lại cho nhớ nhớ là j là các phần tử trong mảng a và j+1 là phần tử tiếp theo của mảng a 🚀🚀
 * - Dòng code 32: Ta gắn phần tử đầu tiên của mảng là số 5. Nên log ra ta được số 5 ( a[j] = 5 )
 * - Dòng code 33: dòng code này ta log ra thì a[j+1] = 5. Bởi vì phần tử phía sau của 7 là số 5
 */
