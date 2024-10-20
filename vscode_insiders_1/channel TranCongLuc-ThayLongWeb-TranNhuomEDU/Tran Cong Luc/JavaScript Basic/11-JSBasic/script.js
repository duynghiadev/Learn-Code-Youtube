// Ở ví dụ này mình dùng biến var để có thể làm ví dụ này cho mấy bạn dễ hiểu. Chứ dùng biến let, const thì sẽ sai
for (var run = 0; run <= 10; run++) {
  console.log('Run:', run)
}
console.log('Run sau khi chạy xong vòng lặp:', run)

let john = ['john', 'smith', 28, true]
console.log('john:', john)

for (run = 0; run < john.length; run++) {
  console.log(`Phần tử thứ ${run} là ${john[run]}`)
}

const calAverage = () => {
  this.average = (this.maths + this.physics) / 2
  return this.average
}

let arrStudents = [
  { fullName: 'Nguyen Van A', maths: 9, physics: 5 },
  { fullName: 'Nguyen Van B', maths: 8, physics: 10 },
  { fullName: 'Nguyen Van C', maths: 4, physics: 5 },
  { fullName: 'Nguyen Van D', maths: 10, physics: 7 }
]

// Chúng ta không nên log ra kiểu này => Vì khi trong mảng nhiều phần tử sẽ không ổn
console.log('arrStudents[index]:', arrStudents[0])
console.log('arrStudents[index]:', arrStudents[1])
console.log('arrStudents[index]:', arrStudents[2])
console.log('arrStudents[index]:', arrStudents[3])

for (let index = 0; index < arrStudents.length; index++) {
  arrStudents[index].calAverage = calAverage
  arrStudents[index].calAverage()
  console.log('arrStudents[index]:', arrStudents[index])
}
console.log('arrStudents:', arrStudents)

/**
 * Dưới đây demo kiến thức trong for in
 */
// Mỗi học sinh có số lượng điểm khác nhau
// Object scores lưu điểm không phải là 1 mảng -> Cho nên nó không có thuộc tính length

/**
 * - Nếu như chúng ta muốn áp dụng công thức tính trung bình ở đây thì sinh ra 1 cái logic khác. Bởi vì thằng studentA thì chia cho 3, thắng studentB thì chia cho 4,...Nó rất là không ổn ở đây, cho nên phải tìm giải pháp khác cho nó tự tìm và tự tính thằng A phải chia 3, và thằng B phải chia 4...
 * - Cho nên chúng ta phải tạo vòng for chạy từng thuộc tính này
 * @type {{year: number, scores: {chemistry: number, maths: number, physics: number}, fullName: string}}
 */
console.log('==========================================')

let totalAverage = function () {
  let total = 0
  let totalScores = 0
  for (let key in this.scores) {
    total += 1
    totalScores += this.scores[key]
    console.log(`scores ${key} is ${this.scores[key]}`)
  }
  console.log('total:', total)
  console.log('totalScores:', totalScores)
  return totalScores / total
}

let studentA = {
  fullName: 'Nguyen Van A',
  year: 1992,
  scores: {
    maths: 9,
    physics: 10,
    chemistry: 8
  },
  calAverage: totalAverage
}

let studentB = {
  fullName: 'Nguyen Van B',
  year: 1992,
  scores: {
    maths: 9,
    physics: 10,
    chemistry: 8,
    english: 10
  },
  calAverage: totalAverage
}

console.log('Average StudentA is:', studentA.calAverage())
console.log('Average StudentB is:', studentB.calAverage())

/**
 * Dưới đây là ví dụ về while và do while
 */
let run_1 = 0
while (run_1 <= 10) {
  console.log('while run_1:', run_1)
  run_1++
}

let run_2 = 0
do {
  console.log('while run_2:', run_2)
  run_2++
} while (run_2 <= -1)
