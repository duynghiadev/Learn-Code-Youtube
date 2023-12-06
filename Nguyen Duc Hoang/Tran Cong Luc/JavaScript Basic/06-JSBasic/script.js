/**
 * Cách 1
 */
var arrStudent = ['Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C']
console.log('arrStudent:', arrStudent)
console.log('arrStudent.length:', arrStudent.length)
console.log('arrStudent[0]:', arrStudent[0])
console.log('arrStudent[arrStudent.length-1]:', arrStudent[arrStudent.length - 1])

/**
 * Cách 2
 */
var arrStudent2 = new Array('Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C')
console.log('arrStudent2:', arrStudent2)
console.log('arrStudent2.length:', arrStudent2.length)
console.log('arrStudent2[0]:', arrStudent2[0])
console.log('arrStudent2[arrStudent2.length-1]:', arrStudent2[arrStudent2.length - 1])

/**
 * - C, C++, Java -> Array chỉ lưu trữ được kiểu dữ liệu
 * - Trong JavaScript bản chất của Array là một Object
 */
console.log(typeof arrStudent)
console.log(typeof arrStudent2)

var arrDemo = ['Duy Nghia Dev', 28, true, [123, 456, 789]]
console.log('arrDemo:', arrDemo)
console.log('arrDemo[2]:', arrDemo[2])
console.log('arrDemo[][]:', arrDemo[3][2])
