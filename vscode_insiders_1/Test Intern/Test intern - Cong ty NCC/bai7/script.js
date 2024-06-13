const MOD = 10 ** 9 + 7;

// Function to multiply two matrices with modulo
function matrixMult(A, B) {
  const n = A.length;
  const C = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      C[i][j] = 0;
      for (let k = 0; k < n; k++) {
        C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % MOD;
      }
    }
  }
  return C;
}

// Function to compute matrix exponentiation
function matrixPow(mat, exp) {
  const n = mat.length;
  let res = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
  while (exp > 0) {
    if (exp % 2 === 1) {
      res = matrixMult(res, mat);
    }
    mat = matrixMult(mat, mat);
    exp = Math.floor(exp / 2);
  }
  return res;
}

// Function to count flower arrangements
function countFlowerArrangements(N) {
  if (N === 1) return 5;

  const T = [
    [0, 1, 0, 0, 0], // R: only L can follow
    [1, 0, 1, 0, 0], // L: R or M can follow
    [0, 0, 0, 1, 0], // M: only C can follow
    [0, 0, 1, 0, 1], // C: M or T can follow
    [1, 0, 0, 0, 0], // T: only R can follow
  ];

  const T_exp = matrixPow(T, N - 1);

  let totalWays = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      totalWays = (totalWays + T_exp[i][j]) % MOD;
    }
  }
  return (totalWays * 5) % MOD; // Multiply by 5 to account for the first flower
}

// Read input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (N) => {
  N = BigInt(N.trim());
  console.log(countFlowerArrangements(Number(N)));
  rl.close();
});
