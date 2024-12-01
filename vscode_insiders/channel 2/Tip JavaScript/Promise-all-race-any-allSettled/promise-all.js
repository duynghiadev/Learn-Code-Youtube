const ps1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "promiseResolve 01")
);

const ps2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "promiseResolve 02")
);

const ps3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "promiseResolve 03")
);

console.log("=".repeat(50));
console.log("promise all");

Promise.all([ps1, ps2, ps3])
  .then((values) => console.log(`result promise.all ${values}`))
  .catch((err) => console.error(`result promise.all err ${err}`));
