/**
 * - Ở bên file example1.js thì cách đó dành cho những bạn mới học javascript => chưa biết gì, nên làm cách đó
 * - Còn những bạn đã biết basic rồi thì nên làm cách tối ưu hơn
 */
// Điểm số của các đội
let johnScores = [89, 120, 103]
let markScores = [116, 94, 123]
let maryScores = [97, 134, 105]

// Bước 1: Tính điểm trung bình của mỗi đội
let averageJohn = johnScores.reduce((a, b) => a + b, 0) / johnScores.length
let averageMark = markScores.reduce((a, b) => a + b, 0) / markScores.length
let averageMary = maryScores.reduce((a, b) => a + b, 0) / maryScores.length

// Bước 2: Xác định đội thắng
if (averageJohn > averageMark && averageJohn > averageMary) {
  console.log(`Đội thắng là đội của John với điểm trung bình là ${averageJohn}`)
} else if (averageMark > averageJohn && averageMark > averageMary) {
  console.log(`Đội thắng là đội của Mark với điểm trung bình là ${averageMark}`)
} else if (averageMary > averageJohn && averageMary > averageMark) {
  console.log(`Đội thắng là đội của Mary với điểm trung bình là ${averageMary}`)
} else {
  console.log('Có ít nhất hai đội hoà nhau.')
}
