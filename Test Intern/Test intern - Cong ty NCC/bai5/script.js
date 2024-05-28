function canMarioWin(n) {
  // Create an array to store the results of subproblems
  const dp = new Array(n + 1).fill(false);

  // Base cases
  dp[0] = false; // If there are no coins left, the player to move loses

  // Fill the dp array
  for (let i = 1; i <= n; i++) {
    if (i >= 1 && !dp[i - 1]) {
      dp[i] = true;
    } else if (i >= 2 && !dp[i - 2]) {
      dp[i] = true;
    } else if (i >= 3 && !dp[i - 3]) {
      dp[i] = true;
    } else {
      dp[i] = false;
    }
  }

  // The result for n coins
  return dp[n];
}

// Test the function
const numberOfCoins = 4;
console.log(
  `With ${numberOfCoins} coins, can Mario guarantee a win? ${canMarioWin(
    numberOfCoins
  )}`
);
