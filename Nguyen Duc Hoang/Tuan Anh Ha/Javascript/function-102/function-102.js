const group = [11, 3, 25, 55, 19]

const getVoters = (ages) => {
  let over18 = []
  for (let item of ages) {
    if (item > 18) {
      over18.push(item)
    }
  }
  return over18
}

let voters = getVoters(group)
console.log('voters:', voters)

console.log('--------------------------------------')

for (index = 0; index <= group.length; index++) {
  if (group[index] >= 18) {
    console.log(group[index])
  }
}
