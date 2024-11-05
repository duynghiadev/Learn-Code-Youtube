const a = [4, 3, 5, 10, 9, 7, 8]
const b = [5, 7, 8]
// output: [4,3,10,9]

const c = a.filter((item) => !b.includes(item))
const c_1 = a.filter((item) => b.includes(item))
console.log('c:', c)
console.log('c_1:', c_1)
