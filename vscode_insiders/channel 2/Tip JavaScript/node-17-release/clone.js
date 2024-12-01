const obj = {
  name: 'Ronaldo',
  clubs: {
    name: 'Manchester United'
  },
  age: undefined,
  abc: NaN
}

const copyObj_1 = obj // shallow copy
const copyObj_2 = { ...obj } //shallow copy

const copyObj_3 = JSON.parse(JSON.stringify(obj)) // shallow copy

const copyObj_4 = structuredClone(obj) // node 17 -> Deep copy

obj.name = 'Cavani'
obj.clubs.name = 'Chelsea'

console.log('copyObj_1', copyObj_1)
console.log('copyObj_2', copyObj_2)
console.log('copyObj_3', copyObj_3)
console.log('copyObj_4', copyObj_4)

console.log('obj', obj)
