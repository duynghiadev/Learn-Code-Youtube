/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  A = A.map((x) => (x *= x));
  A.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  return A;
};
