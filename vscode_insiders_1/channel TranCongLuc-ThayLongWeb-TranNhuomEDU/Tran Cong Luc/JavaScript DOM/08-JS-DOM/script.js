let demoId = document.getElementById('demo')
console.log('demoId:', demoId.classList)

// Add class
demoId.classList.add('class1', 'class2', 'class3')

// Remove class
demoId.classList.remove('class3')

// style declaration
demoId.style.backgroundColor = 'red'
demoId.style.position = 'relative'
demoId.style.border = '1px dashed black'

// Lưu ý: tại function này ta truyền vào 3 dấu chấm => Đó là của ES6 => cụ thể đó là rest parameter
function test(...params) {
  console.log('params:', params)
}
test('abc', 'def')
