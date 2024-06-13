let addition_1 = x => y => z => x + y + z

// or

let addition_2 = (x) => (y) => (z) => {
  return x + y + z
}

console.log('Result addition_1:', addition_1(1)(2)(3))
console.log('Result addition_2:', addition_2(1)(2)(3))
