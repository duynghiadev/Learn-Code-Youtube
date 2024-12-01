const ps1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1500, "promiseResolve 01")
);

const ps2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "promiseResolve 02")
);

const ps3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "promiseResolve 03")
);

console.log("=".repeat(50));
console.log("promise any");

Promise.any([ps2, ps1, ps2])
  .then((values) => console.log(`result promise.any ${values}`))
  .catch((err) => console.error(`result promise.any err ${err}`));
