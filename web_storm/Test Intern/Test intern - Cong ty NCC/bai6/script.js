function maximalRectangle(matrix) {
  if (matrix.length === 0) return 0;
  const n = matrix.length;
  const m = matrix[0].length;
  const heights = new Array(m).fill(0);
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // If matrix[i][j] is '1', increment the height, otherwise reset to 0
      heights[j] = matrix[i][j] === 1 ? heights[j] + 1 : 0;
    }
    // Compute the largest rectangle for the current histogram
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights) {
  const stack = [];
  heights.push(0); // Add a sentinel value to pop out all elements from the stack at the end
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  heights.pop(); // Remove the sentinel value
  return maxArea;
}

// Input handling
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const matrix = [];

  for (let i = 1; i <= N; i++) {
    matrix.push(input[i].split(" ").map(Number));
  }

  const result = maximalRectangle(matrix);
  console.log(result);
});
