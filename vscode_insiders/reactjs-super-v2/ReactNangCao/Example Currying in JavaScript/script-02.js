// Reference: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-46.php

const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

console.log(curry(Math.pow)(2)(8))
console.log(curry(Math.min, 3)(10)(50)(2)) 