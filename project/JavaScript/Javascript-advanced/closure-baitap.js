function a(x) {
  x++;
  return function () {
    console.log(++x);
  };
}

a(1)();
a(1)();
a(1)();

let x = a(1);
x();
x();
x();
// Output: ?
