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

// Main function to solve the problem
function solve() {
  const [N, M] = gets().split(" ").map(Number);
  const edges = [];
  for (let i = 0; i < M; i++) {
    const [u, v] = gets().split(" ").map(Number);
    edges.push([u, v]);
  }

  // Function to perform DFS
  function dfs(node, visited, adjList) {
    let stack = [node];
    while (stack.length > 0) {
      let current = stack.pop();
      if (!visited[current]) {
        visited[current] = true;
        for (let neighbor of adjList[current]) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  // Create adjacency list
  let adjList = Array.from({ length: N }, () => []);
  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  // Find the number of connected components
  let visited = Array(N).fill(false);
  let components = 0;

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      components++;
      dfs(i, visited, adjList);
    }
  }

  // Calculate the minimum number of edges needed to connect all components
  let minEdges = components - 1;
  print(minEdges);
}

// Read all input lines
rl.on("line", (line) => {
  if (line.trim().toLowerCase() === "finish") {
    rl.close();
  } else {
    input.push(line);
  }
});

// After reading all lines, run the solve function
rl.on("close", () => {
  solve();
});
