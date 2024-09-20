const a = [
  {
    id: 1,
    isShow: false
  },
  {
    id: 2,
    isShow: false
  },
  {
    id: 3,
    isShow: false
  }
]

const b = 2

const index = a.findIndex((i) => i.id === b)
console.log(`index:`, index)

if (index !== -1) {
  const item = a[index]
  console.log(`item:`, item)

  a.splice(index, 1)
  a.unshift(item)
}

console.log(`a:`, a)
