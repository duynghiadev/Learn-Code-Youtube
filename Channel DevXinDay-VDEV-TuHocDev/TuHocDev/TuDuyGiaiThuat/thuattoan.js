// string = '21452365874'

// cách 1
function reverse(string) {
  let output = ''
  for (let i = 0; i < string.length; i++) {
    output = string.substr(i, 1) + output
  }

  return output
}
console.log(reverse('123456789'))

// cách 2
function reverse_2(string) {
  const arr = string.split('')
  let output = ''

  for (let i = 0; i < arr.length; i++) {
    output = arr[i] + output
  }

  return output
}
console.log(reverse_2('abcdefgijxkmq'))

// cách 3: method reverse() availabel in language JavaScript. Using method join() to convert from array to string
function reverse_3(string) {
  const arr = string.split('')

  return arr.reverse().join('')
}
console.log(reverse_3('9876543210'))
