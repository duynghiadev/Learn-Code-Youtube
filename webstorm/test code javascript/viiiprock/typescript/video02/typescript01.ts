interface Lengthwise {
  length: number;
  value: number;
}

function someFunc<T extends Lengthwise>(arg: T): T {
  console.log("arg.length:", arg.length);
  console.log("arg.value:", arg.value);
  return arg;
}

someFunc({ length: 13, value: 3, name: "duynghiadev" });
