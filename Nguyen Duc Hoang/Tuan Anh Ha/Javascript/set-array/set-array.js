/**
 * - Trong array thì có index, còn trong Set thì lại không có index.
 * - Nếu trong Set có 1 phần tử nào đó bị lặp lại thì biến đó coi như không tồn tại
 */

const myArray = ['book', 'laptop', 5, 'book']
const mySet = new Set(['book', 'laptop', 5, 'book'])
mySet.add('car')

console.log('myArray:', myArray)
console.log('myArray[0]:', myArray[0])
console.log('------------------------------------')
console.log('mySet:', mySet)
console.log('mySet[0]:', mySet[0])
console.log('mySet.values:', mySet.values())
console.log('mySet.size:', mySet.size)
mySet.clear()
console.log('mySet.size after clear:', mySet.size)
