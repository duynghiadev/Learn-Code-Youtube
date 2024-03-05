interface Lengthwise {
  length: number
}

function someFunc<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

someFunc({ length: 13, value: 3 })
