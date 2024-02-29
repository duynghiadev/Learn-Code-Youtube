// những method này khi mình thay đổi thì vô hình chung mảng gốc cũng thay đổi lun. Cho nên hạn chế dùng những method này

const arr = [3, 2, 1]
const sortArr = arr.sort()

console.log('sortArr:', sortArr)
console.log('arr:', arr)

console.log('----------------------')

const arr1 = [3, 2, 1]
const sortArr1 = arr1.reverse()

console.log('sortArr1:', sortArr1)
console.log('arr1:', arr1)

console.log('----------------------')

// Những method này thì nó sẽ không làm thay đổi mảng gốc (trong es14)

const arr2 = [3, 2, 1]
const sortArr2 = arr2.toSorted()

console.log('sortArr2:', sortArr2)
console.log('arr2:', arr2)

console.log('----------------------')

const arr3 = [1, 2, 2, 4]
const sortArr3 = arr3.with(2, 3) // index: 2 -> replace number 3 will to 3
console.log('sortArr3:', sortArr3)
console.log('arr3:', arr3)

console.log('----------------------')

const arr4 = [1, 2, 2, 4]
const sortArr4 = arr4.toReversed(2, 3)
console.log('sortArr4:', sortArr4)
console.log('arr4:', arr4)
