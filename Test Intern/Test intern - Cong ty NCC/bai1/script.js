const readline = require("readline");

// Set up readline for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to determine the cell type at generation n and position k
function determineCellType(n, k) {
  let cellType = "X"; // Start with the initial cell type

  while (n > 0) {
    if (k % 2 === 1) {
      // k is odd, we are on the left side, type remains the same
      cellType = cellType === "X" ? "X" : "Y";
    } else {
      // k is even, we are on the right side, type switches
      cellType = cellType === "X" ? "Y" : "X";
    }

    k = Math.ceil(k / 2); // Move to the parent's position
    n--; // Move to the previous generation
  }

  return cellType;
}

let inputs = [];
let T;

rl.question("Enter number of test cases:\n", (t) => {
  T = Number(t);

  let count = 0;
  console.log(`Enter ${T} test cases in the format "n k":`);
  rl.on("line", (line) => {
    inputs.push(line);
    count++;
    if (count === T) {
      rl.close();
    }
  });

  rl.on("close", () => {
    inputs.forEach((input) => {
      const [n, k] = input.split(" ").map(Number);
      let result = determineCellType(n, k);
      console.log(result);
    });
  });
});
