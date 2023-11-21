// 70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dynamic = [];

  dynamic[1] = 1;
  dynamic[2] = 2;

  for (let i = 3; i <= n; i++) {
    dynamic[i] = dynamic[i - 1] + dynamic[i - 2];
  }

  return dynamic[n];
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
