let myMap = new Map([
  ['name', 'Jon Doe'],
  ['age', 39],
  ['address', 'Viet Nam']
])

myMap.set('hobbies', ['cooking', 'coding', 'music'])
myMap.set(3, 'Years of experience')
myMap.set(true, 'Married')
myMap.set({ car: 'BMW', computer: 'Macbook' }, 'Plan to buy')
myMap.set(function saySomething() {
  console.log('I am a function in a Map')
}, 'Function as a key')

console.log(`myMap: ${myMap}`)
console.log(myMap)
console.log(myMap.size)

console.log('-----------------------------------')

myMap.forEach((value, key) => {
  console.log('key, value:', key, value)
})

console.log('-----------------------------------')

for (let item of myMap) {
  console.log('item:', item)
}

/**
 * - Map thì nó mang tính ổn định khi ta chạy qua từng thành phần của nó
 * - Khi mà chứa các thông tin lớn hơn và quan trọng, thì thông tin này rất là lớn thì chúng ta nên dùng là Map
 * - Đối với các dự án nhỏ thì chúng ta nên dùng object
 */
