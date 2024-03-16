/**
 * Cách sử dụng if else thay cho map
 */
const getGradeByName = (name) => {
  if (name === 'Anna') {
    return 1
  } else if (name === 'Bob') {
    return 2
  } else if (name === 'Chris') {
    return 3
  } else if (name === 'Danny') {
    return 4
  } else if (name === 'Frank') {
    return 5
  }
}
console.log('getGradeByName:', getGradeByName('Frank'))

const getGradeByName_2 = (name) => {
  const gradeMap = {
    Anna: 1,
    Bob: 2,
    Chris: 3,
    Danny: 4,
    Frank: 5
  }
  console.log('name:', name)
  return gradeMap[name]
}
console.log('getGradeByName_2:', getGradeByName_2('Danny'))
