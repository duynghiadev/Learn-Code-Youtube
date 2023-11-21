// page 28
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const copy = [...nums];
  copy.sort((a, b) => parseInt(a) - parseInt(b));
  const hash = {};

  for (let i = 0; i < copy.length; i++) {
    const num = copy[i];
    if (hash[num] === undefined) {
      hash[num] = i;
    }
  }
  return nums.map((num) => hash[num]);
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);