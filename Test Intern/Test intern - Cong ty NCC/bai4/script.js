const readline = require("readline");

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let numProblems = 0;

// Read each line of input
rl.on("line", (line) => {
  inputLines.push(line);
  if (inputLines.length === 1) {
    numProblems = parseInt(line);
  }
  if (inputLines.length === numProblems + 1) {
    rl.close();
  }
});

// When input reading is complete, process the lines read
rl.on("close", () => {
  for (let i = 1; i <= numProblems; i++) {
    const [a, b] = inputLines[i].split(" ").map(Number);
    console.log(a + b);
  }
});
