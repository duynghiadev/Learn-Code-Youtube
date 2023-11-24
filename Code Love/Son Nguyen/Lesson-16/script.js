// Example 1:
let ranks = ['a', 'b', 'c']
for (i = 0; i < ranks.length; i++) {
  document.write(ranks[i] + '<br/>')
}

// Example 2:
ranks.forEach(function (currentValue, index, array) {
  document.write(currentValue + ' ' + index + ' ' + array + '<br/>')
  console.log(this)
}, 10)

// Example 3:
let domain = ['duynghiadev', 'kunhi', 'nghiabuck']
domain.map((sos) => {
  document.write(`<h1>${sos}</h1>`)
})

// Example 4:
let domain_1 = ['messi', 'ronaldo', 'neymar']
let new_value = domain_1.filter(function (sos) {
  return sos === 'messi'
})
document.write(`<h1>${new_value}</h1>`)

// Example 5:
const numbers = [11, 15, 19]

let number = 1
numbers.reduce((total, currentValue_1, currentIndex, arr) => {
  console.log('Lần lặp thứ:', number)
  console.log('Giá trị:', currentValue_1)
  console.log('Số thứ tự:', currentIndex)
  console.log('Mảng hiện tại:', arr)
  console.log('-----------------------')
  number++
}, 0)
