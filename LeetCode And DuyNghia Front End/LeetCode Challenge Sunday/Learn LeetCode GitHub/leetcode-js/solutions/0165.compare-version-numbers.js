/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1Parts = version1.split(".").map((x) => Number.parseInt(x));
  const v2Parts = version2.split(".").map((x) => Number.parseInt(x));

  let n1 = v1Parts.length;
  let n2 = v2Parts.length;
  const sizeDiff = Math.abs(n2 - n1);
  if (n1 < n2) {
    for (let i = 0; i < sizeDiff; i++) {
      v1Parts.push(0);
    }
    n1 = v1Parts.length;
  } else if (n2 < n1) {
    for (let i = 0; i < sizeDiff; i++) {
      v2Parts.push(0);
    }
    n2 = v2Parts.length;
  }

  let result = 0;
  for (let i = 0; i < n1; i++) {
    if (v1Parts[i] < v2Parts[i]) {
      return -1;
    } else if (v1Parts[i] > v2Parts[i]) {
      return 1;
    }
  }

  return result;
};
