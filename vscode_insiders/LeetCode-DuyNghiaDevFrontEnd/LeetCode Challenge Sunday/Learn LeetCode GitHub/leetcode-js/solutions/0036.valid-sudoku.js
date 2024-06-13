/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = board.length;

  for (let i = 0; i < n; i++) {
    const lines = [];
    const columns = [];
    for (let j = 0; j < n; j++) {
      // Line by line
      lines.push(board[i][j]);

      // Column by column
      columns.push(board[j][i]);
    }

    let result = hasDuplicates(lines);
    if (result) {
      return false;
    }

    result = hasDuplicates(columns);
    if (result) {
      return false;
    }
  }

  // 3 by 3 sums
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const square = [];
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          square.push(board[x][y]);
        }
      }

      result = hasDuplicates(square);
      if (result) {
        return false;
      }
    }
  }

  return true;
};

const hasDuplicates = (entries) => {
  const seen = {};

  for (let i = 0; i < entries.length; i++) {
    if (entries[i] === ".") {
      continue;
    }

    if (seen[entries[i]]) {
      return true;
    }

    seen[entries[i]] = true;
  }

  return false;
};
