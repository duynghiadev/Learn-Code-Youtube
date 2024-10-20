const a = [
  {
    id: 1,
    name: 'nghia'
  },
  {
    id: 1,
    name: 'duynghia'
  },
  {
    id: 2,
    name: 'duynghiadev'
  }
]

const findDuplicate = (arr) => {
  const map = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const { id } = arr[i] // es6 --> destructuring assignment
    if (map[id]) {
      result.push(id)
    } else {
      map[id] = true
    }
  }
  return result
}

console.log('filter duplicate has id:', findDuplicate(a))

const filterArrray = a.filter((i) => i.id !== findDuplicate(a)[0])
console.log('filterArrray:', filterArrray)
