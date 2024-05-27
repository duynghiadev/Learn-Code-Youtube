const myArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Eve' }
]

type Person = typeof myArray[number]['age']
type Name = typeof myArray[number]['name']