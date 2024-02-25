// Đây là file code mà mình đã tham khảo trên chat-GPT và code lại để xem sự thay đổi trong object sau mỗi lần chạy

const deepCompare = (obj1, obj2) => {
  const changes = {}

  const findChanges = (obj1, obj2, path = '') => {
    for (let key in obj1) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        findChanges(obj1[key], obj2[key], `${path}.${key}`)
      } else {
        if (obj1[key] !== obj2[key]) {
          changes[`${path}.${key}`] = { old: obj1[key], new: obj2[key] }
        }
      }
    }
  }

  findChanges(obj1, obj2)

  return changes
}

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

// Assuming structuredClone is defined somewhere
const copyObj_4 = structuredClone(obj) // node 17 -> Deep copy

obj.name = 'Cavani'
obj.clubs.name = 'Chelsea'

console.log('Original Object:', obj)
console.log('Copied Object 1:', copyObj_1)
console.log('Copied Object 2:', copyObj_2)
console.log('Copied Object 3:', copyObj_3)
console.log('Copied Object 4:', copyObj_4)

console.log('Changes between obj and copyObj_1:', deepCompare(obj, copyObj_1))
console.log('Changes between obj and copyObj_2:', deepCompare(obj, copyObj_2))
console.log('Changes between obj and copyObj_3:', deepCompare(obj, copyObj_3))
console.log('Changes between obj and copyObj_4:', deepCompare(obj, copyObj_4))
