/**
 * Array method: filter() and reduce()
 */
const customers = [
  { name: 'Jon Dow', age: 12, subject: 'Math' },
  { name: 'Jame', age: 22, subject: 'Physic Math' },
  { name: 'Ronaldo', age: 40, subject: 'Information Technology' }
]

const getVoters = (people, age) => {
  return people.filter((person) => person.age >= 18)
}
console.log(getVoters(customers))

const getEachFromArray = (data) =>
  data.reduce((acc, item) => {
    console.log('acc:', acc)
    console.log('item:', item)
    acc[item.name] = { age: item.age, subject: item.subject }
    return acc
  }, [])
console.log(getEachFromArray(customers))
