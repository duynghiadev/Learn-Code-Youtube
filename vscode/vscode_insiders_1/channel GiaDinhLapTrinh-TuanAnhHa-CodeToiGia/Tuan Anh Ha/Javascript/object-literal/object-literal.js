// JavaScript Object Literal
// Hướng dẫn Object Literal thay cho if...else và switch giúp cho code ngắn ngọn và đơn giản hơn.

const myObject = {
  name: 'Jone Doe',
  age: 39,
  married: false
}

const showCapital1 = (country) => {
  if (country.toLowerCase() === 'vietnam') {
    return 'Hanoi'
  } else if (country.toLowerCase() === 'germany') {
    return 'Berlin'
  } else if (country.toLowerCase() === 'italy') {
    return 'Rome'
  } else if (country.toLowerCase() === 'france') {
    return 'Paris'
  } else {
    return 'No info'
  }
}

const showCapital2 = (country) => {
  switch (country.toLowerCase()) {
    case 'vietnam':
      return 'Hanoi'
    case 'germany':
      return 'Berlin'
    case 'italy':
      return 'Rome'
    case 'france':
      return 'Paris'
    default:
      return "I don't know that"
  }
}

const capitalsObject = {
  vietnam: 'Hanoi',
  germany: 'Berlin',
  italy: 'Rome',
  france: 'Paris'
}

const showCapital3 = (country) => {
  return capitalsObject[country.toLowerCase()] ?? 'No information'
}

const capital1 = showCapital1('VIETNAM')
const capital2 = showCapital1('GerMany')

const capital3 = showCapital2('italY')
const capital4 = showCapital2('franCe')

const capital5 = showCapital3('gErmany')

console.log('capital1:', capital1)
console.log('capital2:', capital2)
console.log('capital3:', capital3)
console.log('capital4:', capital4)
console.log('capital5:', capital5)
