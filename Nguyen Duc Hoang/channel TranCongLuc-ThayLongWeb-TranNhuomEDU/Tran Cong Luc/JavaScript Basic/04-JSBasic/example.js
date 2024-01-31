/**
 * This is a file solve exercises
 */
// Điểm số của các đội
let johnScores1 = [89, 120, 103]
let markScores1 = [116, 94, 123]
let maryScores1 = [97, 134, 105]

let johnScores2 = [100, 100, 100]
let markScores2 = [100, 100, 100]
let maryScores2 = [100, 100, 100]

let johnScores3 = [80, 80, 80]
let markScores3 = [80, 80, 80]
let maryScores3 = [80, 80, 80]

// Bước 1: Tính điểm trung bình của mỗi đội
let averageJohn1 = (johnScores1[0] + johnScores1[1] + johnScores1[2]) / 3
let averageMark1 = (markScores1[0] + markScores1[1] + markScores1[2]) / 3
let averageMary1 = (maryScores1[0] + maryScores1[1] + maryScores1[2]) / 3

let averageJohn2 = (johnScores2[0] + johnScores2[1] + johnScores2[2]) / 3
let averageMark2 = (markScores2[0] + markScores2[1] + markScores2[2]) / 3
let averageMary2 = (maryScores2[0] + maryScores2[1] + maryScores2[2]) / 3

let averageJohn3 = (johnScores3[0] + johnScores3[1] + johnScores3[2]) / 3
let averageMark3 = (markScores3[0] + markScores3[1] + markScores3[2]) / 3
let averageMary3 = (maryScores3[0] + maryScores3[1] + maryScores3[2]) / 3

// Bước 2: Xác định đội thắng và in kết quả lên console
console.log('---- Test Case 1 ----')
console.log('John:', averageJohn1)
console.log('Mark:', averageMark1)
console.log('Mary:', averageMary1)
if (averageJohn1 > averageMark1 && averageJohn1 > averageMary1) {
  console.log('Đội thắng là đội của John với điểm trung bình là', averageJohn1)
} else if (averageMark1 > averageJohn1 && averageMark1 > averageMary1) {
  console.log('Đội thắng là đội của Mark với điểm trung bình là', averageMark1)
} else if (averageMary1 > averageJohn1 && averageMary1 > averageMark1) {
  console.log('Đội thắng là đội của Mary với điểm trung bình là', averageMary1)
} else {
  console.log('Có ít nhất hai đội hòa nhau.')
}

console.log('---- Test Case 2 ----')
console.log('John:', averageJohn2)
console.log('Mark:', averageMark2)
console.log('Mary:', averageMary2)
if (averageJohn2 > averageMark2 && averageJohn2 > averageMary2) {
  console.log('Đội thắng là đội của John với điểm trung bình là', averageJohn2)
} else if (averageMark2 > averageJohn2 && averageMark2 > averageMary2) {
  console.log('Đội thắng là đội của Mark với điểm trung bình là', averageMark2)
} else if (averageMary2 > averageJohn2 && averageMary2 > averageMark2) {
  console.log('Đội thắng là đội của Mary với điểm trung bình là', averageMary2)
} else {
  console.log('Có ít nhất hai đội hòa nhau.')
}

console.log('---- Test Case 3 ----')
console.log('John:', averageJohn3)
console.log('Mark:', averageMark3)
console.log('Mary:', averageMary3)
if (averageJohn3 > averageMark3 && averageJohn3 > averageMary3) {
  console.log('Đội thắng là đội của John với điểm trung bình là', averageJohn3)
} else if (averageMark3 > averageJohn3 && averageMark3 > averageMary3) {
  console.log('Đội thắng là đội của Mark với điểm trung bình là', averageMark3)
} else if (averageMary3 > averageJohn3 && averageMary3 > averageMark3) {
  console.log('Đội thắng là đội của Mary với điểm trung bình là', averageMary3)
} else {
  console.log('Có ít nhất hai đội hòa nhau.')
}
