/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let title = "";
  let n = columnNumber;

  while (n) {
    n--;
    title = String.fromCharCode(65 + (n % 26)) + title;
    n = Number.parseInt(n / 26);
  }

  return title;
};
