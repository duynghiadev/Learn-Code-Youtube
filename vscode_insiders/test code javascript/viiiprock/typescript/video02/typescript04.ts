class Generic<T> {
  value?: number;
  add?: (x: T, y: T) => T;
}

const myMethod = new Generic<number>();
console.log("myMethod:", myMethod, "and typeof nyMethod:", typeof myMethod);

const instanceMethod = (myMethod.value = 4);
console.log("instanceMethod:", instanceMethod);

console.log("=".repeat(40));

myMethod.add = function (x, y) {
  return x + y;
};
const funcAdd = myMethod.add(4, 5);
console.log("funcAdd:", funcAdd);
