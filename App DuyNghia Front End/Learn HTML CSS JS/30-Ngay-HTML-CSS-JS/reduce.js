Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce2((total, number, index, array) => {
  console.log(total, number, index, array);
  return total + number;
}, 10);

console.log(result);
