const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// Function to read input
function gets() {
  return input.shift();
}

// Function to print output
function print(output) {
  console.log(output);
}

// Main function to manage project profits
function manageProjects() {
  // Read first line: N and K
  const [N, K] = gets().split(" ").map(Number);

  // Read next N lines: profits for each project
  const profits = [];
  for (let i = 0; i < N; i++) {
    profits.push(Number(gets()));
  }

  // Dynamic programming array to store the maximum profit up to the ith project
  const dp = new Array(N).fill(0);

  // Initialize the dp array with the profits
  for (let i = 0; i < N; i++) {
    dp[i] = profits[i];
  }

  // Calculate the maximum profit
  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= K && i + j < N; j++) {
      dp[i + j] = Math.max(dp[i + j], dp[i] + profits[i + j]);
    }
  }

  // The result is the maximum value in the dp array
  const maxProfit = Math.max(...dp);

  // Print the result
  print(maxProfit);
}

// Read all input lines
rl.on("line", (line) => {
  if (line.trim().toLowerCase() === "finish") {
    rl.close();
  } else {
    input.push(line);
  }
});

// After reading all lines, run the manageProjects function
rl.on("close", () => {
  manageProjects();
});
