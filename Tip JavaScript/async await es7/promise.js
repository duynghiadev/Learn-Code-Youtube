const promise = function asyncOperator(name) {
  return new Promise((resolve, reject) => {
    resolve(name);
  });
};

promise("anonystick").then((name) => console.log(`hello ${name}`));
