function someFunc<T>(arg: T): T {
  return arg
}

interface GenericFunc<Input> {
  (arg: Input): Input
}

const myFunc: GenericFunc<number> = someFunc

console.log(myFunc(4))