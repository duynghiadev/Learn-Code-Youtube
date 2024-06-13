/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (!matchsticks.length) {
    return false;
  }

  const sums = [];
  for (let i = 0; i < 4; i++) {
    sums[i] = 0;
  }

  let perimeter = 0;
  for (let i = 0; i < matchsticks.length; i++) {
    perimeter += matchsticks[i];
  }
  const possibleSide = perimeter / 4;
  if (possibleSide * 4 !== perimeter) {
    return false;
  }

  matchsticks.sort((a, b) => {
    return b - a;
  });

  var dfs = function (index) {
    if (index === matchsticks.length) {
      return sums[0] === sums[1] && sums[1] === sums[2] && sums[2] === sums[3];
    }

    for (let i = 0; i < 4; i++) {
      if (sums[i] + matchsticks[index] > possibleSide) {
        continue;
      }

      sums[i] += matchsticks[index];

      if (dfs(index + 1)) {
        return true;
      }

      sums[i] -= matchsticks[index];
    }

    return false;
  };

  return dfs(0);
};
