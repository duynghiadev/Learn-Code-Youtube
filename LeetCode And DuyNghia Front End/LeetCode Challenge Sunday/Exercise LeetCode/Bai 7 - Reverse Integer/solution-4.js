var reverse = function (x) {
  const absReversed = Math.abs(x).toString().split("").reverse().join("");
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};

console.time(`Testing`);
console.timeEnd(`Testing`);
