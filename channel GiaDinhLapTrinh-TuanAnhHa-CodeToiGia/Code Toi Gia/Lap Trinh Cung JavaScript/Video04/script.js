const array = [1, 2, 3]
// output: [1,2,3,1,2,3]

let newArray = []
for (let i = 0; i < 2; i++) {
  console.log('>>> array[i]:', i)
  for (let j = 0; j < array.length; j++) {
    console.log('array[j]:', array[j])
    newArray.push(array[j])
  }
}
console.log('🚀 newArray:', newArray)
