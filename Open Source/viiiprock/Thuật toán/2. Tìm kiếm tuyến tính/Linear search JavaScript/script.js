let result = 'initial'

function linearSearch(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return `found result ${i}`
    }
  }
  return `no result`
}

const arr = [2, 3, 5, 7, 11, 15]

result = linearSearch(11, arr)
console.log(result)