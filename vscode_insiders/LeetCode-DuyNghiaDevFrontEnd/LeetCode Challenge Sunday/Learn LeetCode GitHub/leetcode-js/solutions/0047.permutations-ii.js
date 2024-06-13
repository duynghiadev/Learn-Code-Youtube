/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]] === undefined) {
      frequency[nums[i]] = 1;
    } else {
      frequency[nums[i]]++;
    }
  }

  const results = [];
  const n = nums.length;
  const combination = [];

  backtrack(combination, n, results, frequency);

  return results;
};

function backtrack(combination, n, results, frequency) {
  if (combination.length === n) {
    results.push(Array.from(combination));
    return;
  }

  for (let [num, counter] of Object.entries(frequency)) {
    if (counter === 0) {
      continue;
    }

    combination.push(num);
    frequency[num]--;

    backtrack(combination, n, results, frequency);

    combination.pop();
    frequency[num]++;
  }
}

const a = permuteUnique([1, 1, 2]);

console.log(a);
