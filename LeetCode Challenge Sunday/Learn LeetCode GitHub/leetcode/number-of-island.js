/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  var result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        result++;
      }
    }
  }
  return result;
};

function dfs(grid, x, y) {
  if (
    x < 0 ||
    x >= grid.length ||
    y < 0 ||
    y >= grid[x].length ||
    grid[x][y] === "0"
  )
    return;
  grid[x][y] = "0"; // mark 0 !!important
  dfs(grid, x - 1, y);
  dfs(grid, x + 1, y);
  dfs(grid, x, y - 1);
  dfs(grid, x, y + 1);
}

console.time(`Testing:`);
console.timeEnd(`Testing:`);
