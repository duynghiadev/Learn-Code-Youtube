/**
 * - Trong array thì chúng ta coi key như là một index
 * - Còn trong object thì key giống như là một biến => key:value
 *
 * - Lưu ý: method được coi như là function (đó là quy ước)
 *
 * - Đây là cách 1 để khai báo object
 */
let student = {
  fullName: 'Duy Nghia Dev',
  year: 2002,
  scores: {
    maths: 9,
    physics: 10,
    chemistry: 5
  },
  calAverage: function () {
    // Tính toán dựa trên scores
    console.log('Running calAverage...')
    console.log('this:', this)
    let maths = this.scores.maths
    let physics = this.scores.physics
    let chemistry = this.scores.chemistry

    return (maths + physics + chemistry) / 3
  }
}
console.log('student:', student)
console.log('fullName:', student.fullName)
console.log('scores:', student.scores)
console.log('scores:', student.scores.maths)
console.log('physics:', student.scores.physics)
console.log('chemistry:', student.scores.chemistry)

let average = student.calAverage() // Method của object student
console.log('average:', average)

// this -> con trỏ this -> Trỏ tới đối tượng hiện tại
// this nó sẽ trỏ đến đối tượng hiện tại được lưu ở trong bộ nhớ máy tính
// Mỗi biến thì có mỗi ô nhớ được lưu trong bộ nhớ máy tính

/**
 * Đây là cách 2 khai báo object: dùng từ khóa new Object
 */
let student2 = new Object()
console.log('student2 before:', student2)

student2.fullName = 'Nguyen Van A'
student2.year = 1990
student2.scores = {
  maths: 9,
  physics: 10,
  chemistry: 5
}

student2.calAverage = student.calAverage

// student2.calAverage = function () {
//   let maths = this.scores.maths
//   let physics = this.scores.physics
//   let chemistry = this.scores.chemistry
//
//   return (maths + physics + chemistry) / 3
// }

console.log('student2 after:', student2)
console.log('student2.calAverage:', student2.calAverage())

/**
 * Những điều cần ưu ý khi đặt tên biến và log ra tên biến❌❌❌
 */
let objDemo = {
  'full-name': 'Nguyen Van B'
}
console.log('objDemo:', objDemo)
// console.log('objDemo.full-name:', objDemo.full - name) // Như này là sai => log ra NaN
console.log("objDemo['full-name']:", objDemo['full-name'])
