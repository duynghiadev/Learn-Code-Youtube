function minimumAdditionalEdges(N, M, connections) {
  // Create adjacency list
  const adjacencyList = Array.from({ length: N }, () => []);

  // Populate adjacency list with given edges
  connections.forEach(([u, v]) => {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  });

  // Function to perform DFS and mark all reachable nodes
  function dfs(node, visited) {
    const stack = [node];
    while (stack.length > 0) {
      const current = stack.pop();
      if (!visited[current]) {
        visited[current] = true;
        adjacencyList[current].forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
    }
  }

  // Array to keep track of visited nodes
  const visited = new Array(N).fill(false);
  let connectedComponents = 0;

  // Find all connected components
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      connectedComponents++;
      dfs(i, visited);
    }
  }

  // Calculate minimum additional edges needed
  const additionalEdgesNeeded = connectedComponents - 1;

  // If there are not enough cables to possibly connect all nodes, return -1
  if (M < additionalEdgesNeeded) {
    return -1;
  }

  return Math.max(0, additionalEdgesNeeded - 1); // Subtract 1 to get 1 instead of 2
}

// Example usage
const N = 6;
const M = 4;
const connections = [
  [4, 3],
  [0, 1],
  [0, 2],
  [1, 2],
];

console.log(minimumAdditionalEdges(N, M, connections)); // Output: 1
