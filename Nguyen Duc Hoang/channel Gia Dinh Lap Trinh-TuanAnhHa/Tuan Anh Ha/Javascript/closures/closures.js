/**
 * - What is Closure?
 * - It's an inner function always has access to the vars and parameters of its outer function
 */
let name = 'John'

function sayHi() {
  return 'Hi ' + name
}

console.log(sayHi())

console.log('------------------------------------------')

function learn(newThing) {
  let skills = ['html', 'css', 'javascript']

  function addSkill() {
    skills.push(newThing)
  }

  addSkill()
  console.log('skills:', skills)
}

learn('reactjs')

console.log('------------------------------------------')
