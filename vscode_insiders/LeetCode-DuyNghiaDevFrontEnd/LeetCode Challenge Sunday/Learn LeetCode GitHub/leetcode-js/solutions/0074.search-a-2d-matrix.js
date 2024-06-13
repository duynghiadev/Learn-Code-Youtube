/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;

  if (m === 0) {
    return false;
  }

  const n = matrix[0].length;
  let lo = 0,
    hi = n * m - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    let i = Math.floor(mid / n),
      j = mid % n;

    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
};
