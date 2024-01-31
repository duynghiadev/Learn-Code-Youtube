/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let i = 0,
    j = 0;
  const out = [];

  while (i < A.length && j < B.length) {
    const lo = Math.max(A[i][0], B[j][0]);
    const hi = Math.min(A[i][1], B[j][1]);

    if (lo <= hi) {
      out.push([lo, hi]);
    }

    if (A[i][1] < B[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return out;
};
