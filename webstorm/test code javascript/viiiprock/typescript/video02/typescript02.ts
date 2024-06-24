function getProperty<T, K extends keyof T>(obj: T, key: K) {
  console.log("T is obj:", obj);
  console.log("K is key:", key);
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log("obj[key] -> x[a]:", getProperty(x, "a"));
