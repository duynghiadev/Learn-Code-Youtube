const ps1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1500, "promiseResolve 01")
);

const ps2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "promiseResolve 02")
);

const ps3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "promiseResolve 03")
);

console.log("=".repeat(50));
console.log("promise allSettled");

Promise.allSettled([ps2, ps1, ps3])
  .then((values) => {
    values.forEach((ps) => {
      console.log(`result promise.allSettled ${JSON.stringify(ps)}`);
    });
  })
  .catch((err) => console.error(`result promise.allSettled err ${err}`));
