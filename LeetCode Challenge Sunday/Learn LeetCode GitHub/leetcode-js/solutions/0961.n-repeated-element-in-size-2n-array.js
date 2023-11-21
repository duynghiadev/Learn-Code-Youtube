/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  A.sort();

  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) {
      return A[i];
    }
  }
};
