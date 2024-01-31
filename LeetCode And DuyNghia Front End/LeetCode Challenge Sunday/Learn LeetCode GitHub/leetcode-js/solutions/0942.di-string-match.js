/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  const result = [];
  let lo = 0,
    hi = S.length;

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === "I") {
      result.push(lo);
      lo++;
    } else {
      result.push(hi);
      hi--;
    }
  }

  return result.concat([lo]);
};
