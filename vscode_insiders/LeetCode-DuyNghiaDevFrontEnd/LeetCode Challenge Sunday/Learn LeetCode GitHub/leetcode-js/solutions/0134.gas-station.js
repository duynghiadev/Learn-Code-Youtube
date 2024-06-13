/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let n = gas.length;
  let totalGas = 0,
    currentGas = 0;
  let startAt = 0;

  for (let i = 0; i < n; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      startAt = i + 1;
      currentGas = 0;
    }
  }

  if (totalGas >= 0) {
    return startAt;
  }

  return -1;
};
