function greeting(name: string[] | string) {
  if (Array.isArray(name)) {
    console.log('Hello ' + name.join(' '))
  } else {
    console.log('Hello ' + name)
  }
}

greeting('Bob')
greeting(['Bob', 'Mary', 'John'])

function get2(name: number[] | string[]) {
  console.log(name.slice(0, 2))
}

get2([12, 32, 43, 45, 99, 54])
get2(['Bob', 'Mary', 'John', 'Ronaldo', 'Messi'])