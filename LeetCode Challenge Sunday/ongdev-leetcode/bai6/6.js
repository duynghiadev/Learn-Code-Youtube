function convert(s, numRows) {
  if (numRows == 1) return s;

  let result = "";

  const length = s.length;
  const cycleLength = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < length; j += cycleLength) {
      result += s.charAt(j + i);

      const notFirstRow = i != 0;
      const notLastRow = i != numRows - 1;
      const nextMiddleCharInbound = j + cycleLength - i < length;

      if (notFirstRow && notLastRow && nextMiddleCharInbound) {
        result += s.charAt(j + cycleLength - i);
      }
    }
  }
  return result;
}

// P   A   H   N
// A P L S I I G
// Y   I   R

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");

// để xếp thành 4 hàng xem thử hihi :v

// P I N
// A L S I G
// Y A H R
// P
// => PINALSIGYAHRPI

console.log(convert("PAYPALISHIRING", 4));
console.log(convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI");
